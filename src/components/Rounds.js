//Rounds -- A parent component for the app's "rounds" mode.
//Manages the rounds data for the current user and conditionally renders the
//appropriate rounds mode page based on App's mode, which is passed in as a prop.

import React from 'react';
import AppMode from './../AppMode.js';
import RoundsTable from './RoundsTable.js';
import RoundForm from './RoundForm.js';
import FloatingButton from './FloatingButton.js';
import SearchBox from './SearchBox.js';

class Rounds extends React.Component {

    //Initialize a Rounds object based on local storage
    constructor(props) {
            super(props);
            let data = JSON.parse(localStorage.getItem(this.props.userId)); 
            if (data == null) { //no data yet for this user -- create empty record
                data = {games: {},
                        gameCount: 0};  
                localStorage.setItem(this.props.userId,JSON.stringify(data));
            }
            this.state = {games: data.games,
                          gameCount: data.gameCount,
                          deleteId: "",
                          editId: "",
                          searchInput: ""};           
        }

    //addRound -- Given an object newData containing a new round, add the round
    //to the current user's list of rounds, commit to local storage, and toggle
    //the mode back to AppMode.ROUNDS since the user is done adding a round.
    addRound = (newData) => {
        let data = JSON.parse(localStorage.getItem(this.props.userId));
        data.games[++data.gameCount] = newData;
        localStorage.setItem(this.props.userId, JSON.stringify(data));
        this.setState({games: data.games, gameCount: data.gameCount});
        this.props.changeMode(AppMode.ROUNDS);
    }

    //editRound -- Given an object newData containing updated data on an
    //existing round, update the current user's round uniquely identified by
    //this.state.editId, commit to local storage, reset editId to empty and
    //toggle the mode back to AppMode.ROUNDS since the user is done editing the
    //round. 
    editRound = (newData) => {
        let data = JSON.parse(localStorage.getItem(this.props.userId)); 
        data.games[this.state.editId] = newData;
        localStorage.setItem(this.props.userId, JSON.stringify(data));
        this.setState({games: data.games, editId: ""});
        this.props.changeMode(AppMode.ROUNDS);
    }

    //deleteRound -- Delete the current user's round uniquely identified by
    //this.state.deleteId, commit to local storage, and reset deleteId to empty.
    deleteRound = (val) => {
        let data = JSON.parse(localStorage.getItem(this.props.userId));
        delete data.games[val];
        data.gameCount = data.gameCount - 1;
        localStorage.setItem(this.props.userId,JSON.stringify(data));
        this.setState({games: data.games, deleteId: ""});
    }  

    //setDeleteId -- Capture in this.state.deleteId the unique id of the item
    //the user is considering deleting.
    setDeleteId = (val) => {
        this.setState({deleteId: val});
        this.deleteRound(val);
    }

    //setEditId -- Capture in this.state.editId the unique id of the item
    //the user is considering editing.
    setEditId = (val) => {
        this.setState({editId: val});
    }

    search = (val) => {
        this.setState({searchInput: val});
    }
    
    //render -- Conditionally render the Rounds mode page as either the rounds
    //table, the rounds form set to obtain a new round, or the rounds form set
    //to edit an existing round.
    render() {
        switch(this.props.mode) {
            case AppMode.ROUNDS:
                return (
                    <>
                    <RoundsTable 
                    rounds={this.state.games}
                    setEditId={this.setEditId}
                    setDeleteId={this.setDeleteId}
                    changeMode={this.props.changeMode}
                    menuOpen={this.props.menuOpen}
                    toSearch = {this.state.searchInput} /> 
                    <FloatingButton
                        handleClick={() => 
                        this.props.changeMode(AppMode.ROUNDS_LOGROUND)}
                        menuOpen={this.props.menuOpen}
                        icon={"fa fa-plus"} />
                    </>
                );
            case AppMode.ROUNDS_LOGROUND:
                return (
                    <RoundForm
                        mode={this.props.mode}
                        startData={""} 
                        saveRound={this.addRound} />
                );
            case AppMode.ROUNDS_EDITROUND:
                return (
                    <RoundForm
                        mode={this.props.mode}
                        startData={this.state.games[this.state.editId]} 
                        saveRound={this.editRound} />
                );
        }
    }

}   

export default Rounds;
