import React, { Component } from 'react';
import logo from '../img/logo.png';

class TopBar extends Component {
  goHome = () => {
    this.props.history.push('HomePage');
  };
  render() {
    return (
      <div style={{backgroundColor:"#3f51b5", display:'flex', flexDirection:'row', justifyContent: "space-between", alignItems:'center'}} >
          <div className="logo-wrapper" style={{marginLeft:'20px'}}>
            <img src={logo} onClick={() => this.goHome()} alt="app_logo" />
          </div>

          <div className="profile" style={{color: 'white', marginRight:'40px'}}>
            <div>UserName</div>
          </div>
      </div>
    );
  }
}

export default TopBar;
