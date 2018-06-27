import React, { Component } from 'react';
import VideoItem from './components/VideoItem';
import YTSearch from 'youtube-api-search';
import './App.css';

const API_KEY = 'AIzaSyDGJ3DsFyBwnzIIspPpyvINfWn9Ggf-TdQ';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
    this.fetchVideoList();
  }

  fetchVideoList() {
    YTSearch(
      {
        key: API_KEY,
        term: 'football',
      },
      (videos) => {
        console.log(videos);
        this.setState({ videos });
      },
    );
  }

  render() {
    return (
      <div className="App">
        <VideoItem video={this.state.videos[0]} title="premiere video" />
        Welcome Everyone to the React Lecture !!
      </div>
    );
  }
}

export default App;
