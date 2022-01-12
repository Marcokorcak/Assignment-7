import React, { Component } from 'react';
import './SearchField.css';


class FieldSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputData: "",
            data: []
        }
    }

    getUserData = event => {
        this.setState({ inputData: event.target.value});
    }

    findTrending = () => {
        let webUrl = 'http://api.giphy.com/v1/gifs/trending?api_key=d8oGL69nXLVzRXAz2QvLtsGlVm4QqEpq'
        fetch(webUrl)
        .then(responseInput => responseInput.json())
        .then(responseInput => {
            this.props.update(responseInput.data);
        })
        .catch(error => console.log(error));
    }

    searchGif = (event) => {
        let webUrl = `http://api.giphy.com/v1/gifs/search?q=${event.target.value}&api_key=d8oGL69nXLVzRXAz2QvLtsGlVm4QqEpq`
        fetch(webUrl)
        .then(responseInput => responseInput.json())
        .then(responseInput => {
            this.setState({ data: responseInput.data});
            this.props.update(responseInput.data);
        })
        .catch(error => console.log(error));
    }

    findRandom = () => {
        let webUrl = 'http://api.giphy.com/v1/gifs/random?api_key=d8oGL69nXLVzRXAz2QvLtsGlVm4QqEpq'
        fetch(webUrl)
        .then(responseInput => responseInput.json())
        .then(responseInput => {
            this.setState({ data: responseInput.data });
            this.props.update([responseInput.data]);
        })
        .catch(error => console.log(error));
    }

    render() {
        return (
            <div className='container'>
                <div className='searchBarBox'>
                    <input type='text' placeholder='Find GIFs' onChange={this.getUserData} id='bar'/>
                </div>
                <div className='button'>
                    <button onClick={this.searchGif} value={this.state.inputData}>Search Gif</button>
                    <button onClick={this.findTrending}>Trending Gifs</button>
                    <button onClick={this.findRandom}>Random Gif</button>
                </div>
            </div>
        )
    }
}

export default FieldSearch;