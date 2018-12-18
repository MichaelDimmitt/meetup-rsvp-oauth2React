import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../img/logo.png';

class TopBar extends Component {
  goHome = () => {
    this.props.history.push('HomePage');
  };
  render() {
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <div className="logo-wrapper">
              <img src={logo} onClick={() => this.goHome()} alt="app_logo" />
            </div>

            <div className="profile">
              <div>UserName</div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default TopBar;
