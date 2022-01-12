import React, { Component } from 'react';
import GifCard from './Components/GifCard';
import SearchField from './Components/SearchField';
import './App.css';


class App extends Component {

  constructor(a) {
    super(a);

    this.state = {
      data: []
    }
  }

  componentDidMount = () => {
    let webUrl='http://api.giphy.com/v1/gifs/trending?api_key=d8oGL69nXLVzRXAz2QvLtsGlVm4QqEpq';
    fetch(webUrl)
    .then(responseDetected => responseDetected.json())
    .then(responseDetected => {
      this.setState({ data: responseDetected.data});
    })
    .catch(error => console.log(error));
  }

  retrieveData = Data => {
    this.setState({ data: Data });
  }

  render() {
    return (
      <div className='container'>
        <div className='searchField'>
          <SearchField update={this.retrieveData} />
        </div>
        <div className='cards'>
          {this.state.data.map((item, index) => (
            <GifCard key={index} url={item.images.original.url} />
          ))}
        </div>
      </div>
    )
  }
}

export default App;