import React from 'react';
import NavBar from './NavBar.js';
import SideMenu from './SideMenu.js';
import ModeBar from './ModeBar.js';
import FloatingButton from './FloatingButton.js';
import LoginPage from './LoginPage.js';
import AppMode from "./../AppMode.js"
import FeedPage from './FeedPage.js';
import Rounds from './Rounds.js';
import CoursesPage from './CoursesPage.js';
import Modal from 'react-modal';
import AboutModal from './AboutModal.js';


const modeTitle = {};
modeTitle[AppMode.LOGIN] = "Welcome";
modeTitle[AppMode.FEED] = "About me";
modeTitle[AppMode.FEED_INTERESTS] = "Interests";
modeTitle[AppMode.FEED_SCHOOL] = "School";
modeTitle[AppMode.ROUNDS] = "Games";
modeTitle[AppMode.ROUNDS_LOGROUND] = "Log New Game";
modeTitle[AppMode.ROUNDS_EDITROUND] = "Edit Game";
modeTitle[AppMode.COURSES] = "Family";

const modeToPage = {};
modeToPage[AppMode.LOGIN] = LoginPage;
modeToPage[AppMode.FEED] = FeedPage;
modeToPage[AppMode.FEED_INTERESTS] = FeedPage;
modeToPage[AppMode.FEED_SCHOOL] = FeedPage;
modeToPage[AppMode.ROUNDS] = Rounds;
modeToPage[AppMode.ROUNDS_LOGROUND] = Rounds;
modeToPage[AppMode.ROUNDS_EDITROUND] = Rounds;
modeToPage[AppMode.COURSES] = CoursesPage;


class App extends React.Component {

  constructor() {
    super();
    this.state = {mode: AppMode.FEED,
                  menuOpen: false,
                  userId: "",
                  modalOpen: false};
  }

  handleChangeMode = (newMode) => {
    this.setState({mode: newMode});
  }

  openMenu = () => {
    this.setState({menuOpen : true});
  }
  
  closeMenu = () => {
    this.setState({menuOpen : false});
  }

  toggleMenuOpen = () => {
    this.setState(prevState => ({menuOpen: !prevState.menuOpen}));
  }

  setUserId = (Id) => {
    this.setState({userId: Id});
  }

  openModal = () => {
    this.setState({modalOpen : true});
  }
  
  closeModal = () => {
    this.setState({modalOpen : false});
  }
  chooseItem = (item ) => {
    if(item == "About") {
      this.openModal();
    } 
  }

  render() {
    const ModePage = modeToPage[this.state.mode];
    return (
      <div  height="100%">
        <NavBar 
          title={"Reintegrating Veterans into Civilian Workforce"} 
          mode={this.state.mode}
          changeMode={this.handleChangeMode}
          menuOpen={this.state.menuOpen}
          modalOpen = {this.state.modalOpen}
          toggleMenuOpen={this.toggleMenuOpen}/>
          <SideMenu 
            menuOpen = {this.state.menuOpen}
            modalOpen = {this.state.modalOpen}
            mode={this.state.mode}
            changeMode={this.handleChangeMode}
            toggleMenuOpen={this.toggleMenuOpen}
            userId={this.state.userId}
            logOut={() => this.handleChangeMode(AppMode.LOGIN)}
            sideChosen={this.chooseItem}
            showAbout = {() => this.openModal}/>
          <ModePage 
            menuOpen={this.state.menuOpen}
            modalOpen = {this.state.modalOpen}
            mode={this.state.mode}
            changeMode={this.handleChangeMode}
            userId={this.state.userId}
            setUserId={this.setUserId}/>
            {this.state.modalOpen ? 
            <AboutModal 
            isOpen={this.state.modalOpen}
            toClose ={this.closeModal} /> : null }


      </div>
    );  
  }
}

export default App;