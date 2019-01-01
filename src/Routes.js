import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './components/Loading';
import { connect } from 'react-redux'

const TopBar = Loadable({
  loader: () => import('./components/TopBar'),
  loading: Loading,
});

const RsvpComponent = Loadable({
  loader: () => import('./components/RsvpComponent'),
  loading: Loading,
});

const Settings = Loadable({
  loader: () => import('./components/Settings'),
  loading: Loading,
});

const HomePage = Loadable({
  loader: () => import('./components/HomePage'),
  loading: Loading,
});

const Login = Loadable({
  loader: () => import('./components/Login'),
  loading: Loading,
});

const Meetups = Loadable({
  loader: () => import('./components/Meetups'),
  loading: Loading,
});
const MeetupsRevamp = Loadable({
  loader: () => import('./components/MeetupsRevamp'),
  loading: Loading,
});


class Routes extends Component {
  render() {
    const { match, meetups, meetup, route, isFetching } = this.props

    return (
      <div style={{ width: '100vw', height: '20px' }}>
        <TopBar history={this.props.history} />
        <section className="body">
          <Route
            exact
            path="/app"
            render={() => <Redirect to="/app/RsvpMe" />}
          />
          <Route path={`${match.url}/RsvpYes`} component={RsvpComponent} />
          <Route path={`${match.url}/meetups`} render={(props) => <Meetups meetups={meetups} onSelect={this.show} isFetching={isFetching} /> } />

          <Route path={`${match.url}/Login`} component={Login} />
          <Route path={`${match.url}/HomePage`} component={HomePage} />
          <Route path={`${match.url}/Settings`} component={Settings} />
          <Route path={`${match.url}/MeetupsRevamp`} component={MeetupsRevamp} />
          
        </section>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.info(state)
  return {
    meetups: state.meetups,
    meetup: state.meetup,
    route: state.route,
    session: state.session,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps)(Routes)
