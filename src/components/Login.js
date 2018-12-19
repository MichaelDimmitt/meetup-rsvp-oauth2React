import React from 'react'
import { toQs } from '../lib/queryString'

export default class Login extends React.Component {
  render() {
    const MEETUP_API_EVENTS_URL =
         'https://api.meetup.com/2/events?access_token=  ';
    const MEETUP_API_RSVP_URL = 'https://api.meetup.com/2/rsvp?access_token=';
    const MEETUP_CLIENT_ID = 'niqkagsfu07kb2coik832vljhm'; // this one is for local dev.
    const MEETUP_REDIRECT_URI = window.location.href;


    const params = {
      client_id: MEETUP_CLIENT_ID,
      response_type: 'token',
      redirect_uri: MEETUP_REDIRECT_URI
    }

    const url = 'https://secure.meetup.com/oauth2/authorize' + toQs(params)

    const style = {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
    const Comp = () => <div className="ph3">
      <h1 className="f6 fw6 ttu tracked">Basic button</h1>
      <a  className="f6 link dim br2 ph3 pv2 mb2 dib white bg-black" href={url}>Button Text</a>
      <a  className="f6 link dim br2 ph3 pv2 mb2 dib white bg-near-black" href="#0">Button Text</a>
      <a  className="f6 link dim br2 ph3 pv2 mb2 dib white bg-dark-gray" href="#0">Button Text</a>
      <a  className="f6 link dim br2 ph3 pv2 mb2 dib white bg-mid-gray" href="#0">Button Text</a>
    </div>

    console.log('props', this.props, 'props')
    return <div>
      <Comp/>
    </div>
  }

}
