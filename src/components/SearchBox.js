import React from 'react';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                searchValue : ""
            }

    }
    handleChange = (event) => {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
        this.props.search(this.state.searchValue);
    }

    render() {
        return (
        <div className="input-group center-search" style={{marginTop : "70px"}}>
            <input name="searchValue" className="form-control py-2 border-left-0 border" type="text" value={this.state.searchValue} onChange={this.handleChange} placeholder="Search Rounds"></input>
        </div>
        );
    }
}

export default SearchBox;