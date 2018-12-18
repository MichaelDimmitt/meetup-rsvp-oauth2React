import React, { Component } from 'react';
import logo from '../img/logo.png';

class TopBar extends Component {
  goHome = () => {
    this.props.history.push('HomePage');
  };
  render() {
    const TachyonNavbar = () => (
      <header style={{backgroundColor:"#3f51b5", display:'flex', flexDirection:'row', justifyContent: "space-between", alignItems:'center'}} className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
        <div className="logo-wrapper" >
          <img src={logo} onClick={() => this.goHome()} alt="app_logo" />
        </div>
        <nav className="f6 fw6 ttu tracked" >
          <div className="profile" style={{color: 'white'}}>
            <div>UserName</div>
          </div>
        </nav>
      </header>
    )
    const NormalNavbar = () => (
      <div style={{backgroundColor:"#3f51b5", display:'flex', flexDirection:'row', justifyContent: "space-between", alignItems:'center'}} >
          <div className="logo-wrapper" style={{marginLeft:'20px'}}>
            <img src={logo} onClick={() => this.goHome()} alt="app_logo" />
          </div>

          <div className="profile" style={{color: 'white', marginRight:'40px'}}>
            <div>UserName</div>
          </div>
        </div>
    )
    return (
      <NormalNavbar/>
    )
  }
}

export default TopBar;
