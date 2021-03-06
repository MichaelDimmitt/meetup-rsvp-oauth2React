import axios from 'axios';

export const REQUEST_MEETUPS = 'REQUEST_MEETUPS';
export const RECEIVE_MEETUPS = 'RECEIVE_MEETUPS';
export const TO_MEETUP_DETAILS = 'TO_MEETUP_DETAILS';
export const TO_HOME = 'TO_HOME';
export const TO_LOGIN = 'TO_LOGIN';
export const SAVE_SESSION = 'SAVE_SESSION';
export const LOAD_DATA = 'LOAD_DATA';

export function loadData() {
  return { type: LOAD_DATA };
}

export function saveSession(resp) {
  console.info('save session', resp);
  return {
    type: SAVE_SESSION,
    oauthResponse: resp,
  };
}

export function shouldRenewToken(state, timeNow) {
  console.info(
    'token will expire in',
    (state.session.expiresAt - timeNow) / 60,
    'minutes'
  );
  return timeNow > state.session.expiresAt ? true : false;
}

export function toLogin() {
  return { type: TO_LOGIN };
}

export function toMeetupDetails(id) {
  return {
    type: TO_MEETUP_DETAILS,
    id: id,
  };
}

export function toHome() {
  return {
    type: TO_HOME,
  };
}

export function requestMeetups() {
  return { type: REQUEST_MEETUPS };
}

export function receivedMeetups(json) {
  return {
    type: RECEIVE_MEETUPS,
    meetups: json,
  };
}
export function rsvpMe(token){
  
  return (dispatch, getState) => {
    const timeNow = new Date() / 1000; // in seconds
    if (shouldRenewToken(getState(), timeNow)) {
      console.info('need to renew token');
      dispatch(toLogin());
    } else {
      console.info('token still good');
      dispatch(requestMeetups());
      dispatch(toHome());
      window.location.hash = 'rsvp';
      
      /* Values not used in axios post request. but may need to be used one day.
        crossDomain: true,
        data: {  },
       */
      const config = {
        method: 'POST',
        url: 'https://api.meetup.com/2/rsvp',
        params: {
          rsvp:'no', event_id: 'gqnjlqyxqbdc',
          access_token: token,
        }
      };
      return axios(config)
      .catch(err => { console.log(err) })
      .then(res => { console.log(res) });

    }
  }
}

export function fetchMeetups(token) {
  console.log(' blaha habhsbkajsbdkbsbdkjbds', token)
  return (dispatch, getState) => {
    const timeNow = new Date() / 1000; // in seconds
    if (shouldRenewToken(getState(), timeNow)) {
      console.info('need to renew token');
      dispatch(toLogin());
    } else {
      console.info('token still good');
      dispatch(requestMeetups());
      dispatch(toHome());
      window.location.hash = 'home';

      const config = {
        url: 'https://api.meetup.com/self/events',
        params: {
          page: 20,
          status: 'upcoming',
          access_token: token,
        },
      };
      return axios(config)
        .catch(err => {
          // window.location = ''
          dispatch(toLogin()); // temporary hack to reset app when request fail due to meetup only allowing cors with valid token
        })
        .then(res => {
          console.log({res})
          return dispatch(receivedMeetups(res.data));
        });
    }
  };
}
