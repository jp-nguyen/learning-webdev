import React, { Component } from 'react';
import Tweet from './Tweet';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tweets : [],
      currTweet : ''
    };

    this.tweetIndex = 0;
  }

  updateCurrTweet = (event) => {
    const newState = {
        currTweet : event.target.value
    };
    this.setState(newState);
  }

  addTweet = () => {
    const currTweetObj = {
      content : this.state.currTweet,
      index : this.tweetIndex
    };

    this.tweetIndex += 1;

    const prevTweets = this.state.tweets;
    const newTweets = [currTweetObj, ...prevTweets];
    const newState = {
      tweets : newTweets,
      currTweet : ''
    };
    this.setState(newState);
  }

  render() {
      const tweets = this.state.tweets;
      const lists = tweets.map((tweetObj) => <Tweet tweet={tweetObj.content} key = {tweetObj.currentInd}/>);
    return (
      <div>
        <input value = {this.state.currTweet} onChange = {this.updateCurrTweet}/>
        <button onClick = {this.addTweet}>tweet</button>
        {lists}
      </div>
    );
  }
}

export default App;
