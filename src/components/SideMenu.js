import React from 'react';
import AppMode from './../AppMode.js'

class SideMenu extends React.Component {

//renderModeItems -- Renders correct subset of mode menu items based on
//current mode, which is stored in this.prop.mode. Uses switch statement to
//determine mode.
renderModeMenuItems = () => {
  switch (this.props.mode) {
    case AppMode.FEED:
      return(
        <div>
        <a className="sidemenu-item" onClick={() => this.props.changeMode(AppMode.FEED_INTERESTS)}>
            <span className="fa fa-users"></span>&nbsp;Sources</a>
        </div>
      );
    break;
    case AppMode.ROUNDS:
      return(
        <div>
          <a className="sidemenu-item" onClick={() => this.props.changeMode(AppMode.ROUNDS_LOGROUND)}>
            <span className="fa fa-plus"></span>&nbsp;Log New Game</a>
          <a className="sidemenu-item">
            <span className="fa fa-search"></span>&nbsp;Search Games</a>
        </div>
      );
    break;
    case AppMode.COURSES:
      return(
        <div>
        <a className="sidemenu-item">
            <span className="fa fa-plus"></span>&nbsp;Siblings</a>
        <a className="sidemenu-item">
            <span className="fa fa-search"></span>&nbsp;Pets</a>
        </div>
      );
    default:
        return null;
    }
}

    render() {
       return (
        <div className={"sidemenu " + (this.props.menuOpen ? "sidemenu-open" : "sidemenu-closed")}
             onClick={this.props.toggleMenuOpen}>
          {/* SIDE MENU TITLE */}
          <div className="sidemenu-title">
              <img src='http://tiny.cc/chrisprofilepic' height='50' width='50' />
              <span id="userID" className="sidemenu-userID">&nbsp;{this.props.userId}</span>
          </div>
          {/* MENU CONTENT */}
          <a className="sidemenu-item" onClick={() => this.props.changeMode(AppMode.FEED)}>
            <span className="fa fa-users"></span>&nbsp;Home</a>
          {this.renderModeMenuItems()}
          {/* The following menu items are present regardless of mode */}
        </div>
       );
    }
}

export default SideMenu;
