import React, { Component } from 'react';

export default class RsvpComponent extends Component {
  componentDidMount() {
  }

  render() {
    const MEETUP_API_EVENTS_URL =
      'https://api.meetup.com/2/events?access_token=  ';
    const MEETUP_API_RSVP_URL = 'https://api.meetup.com/2/rsvp?access_token=';
    const MEETUP_CLIENT_ID = 'ndioq3jd0me4s8d65lfp0vv69q';

    //    let api = mu.Api({
    //      clientId: MEETUP_CLIENT_ID,
    //      onMember: function(member, token) {
    //        console.log(MEETUP_API_RSVP_URL, MEETUP_API_EVENTS_URL);
    //      },
    //    });

    return (
      <body>
        <div id="container">
          <h1>Meetup oauth2 js starter kit</h1>
          <div id="connect">Connect with Meetup</div>
          <div id="member" />
          <ul id="events" />
        </div>
      </body>
    );
  }
}
