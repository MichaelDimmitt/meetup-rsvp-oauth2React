import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { parseQs } from './lib/queryString';
import { createStore, applyMiddleware } from 'redux'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { toHome, toMeetupDetails, loadData, saveSession, fetchMeetups, rsvpMe } from './actions';
import reducer from './reducer';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Routes from './Routes';

const loggerMiddleware = createLogger()

const store = createStore(
  reducer,
  process.env.NODE_ENV === 'development' ?
  applyMiddleware(thunkMiddleware, loggerMiddleware) :
  applyMiddleware(thunkMiddleware)
)

const handleHashRouting = (event) => {
  try {
    var [, path] = window.location.href.match(/#(.*)$/)
    var [page, id] = path.split('/')
    switch (page) {
    case 'home':
      return store.dispatch(toHome())
    case 'show':
      return store.dispatch(toMeetupDetails(id))
    default :
      console.log('hi')
    }
  } catch(e) {
    console.log(e)
  }
}

window.addEventListener('hashchange', handleHashRouting)

const sessionExpiresAt = sessionStorage.getItem('sessionExpiresAt')
const sessionAccessToken = sessionStorage.getItem('sessionAccessToken')

if (sessionAccessToken && sessionExpiresAt) {
  console.info('returning visitor - load data')

  store.dispatch(loadData())
  store.dispatch(fetchMeetups(sessionAccessToken))
  store.dispatch(rsvpMe(sessionAccessToken))
  

} else {
  console.info('first time visitor')

  if (window.location.hash.length > 0) {
    console.info('redirect back from meetup &b have fragment')
    // Makes Sense
    const oauthResponse = parseQs(window.location.hash)

    // save data
    console.info('save to session storage and state')
    store.dispatch(saveSession(oauthResponse))
    store.dispatch(fetchMeetups(oauthResponse.access_token))
    store.dispatch(rsvpMe(oauthResponse.access_token))
  }
}

ReactDOM.render(
  <Provider store={store}>
      <Router className="App">
        <div>
          <Route exact path="/" render={() => <Redirect to="/app/Login" />} />
          <Route path="/app" component={Routes} />
        </div>
      </Router>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
