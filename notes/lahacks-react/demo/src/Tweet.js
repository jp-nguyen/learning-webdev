import React from 'react';

class Tweet extends React.Component {
    constructor() {
        super();
        this.state = {
            numLike: 0
        }
    }

    incrementLike = () => {
        const previousLike = this.state.numLike;
        const newState = {
            numLike: previousLike + 1
        };
        this.setState(newState);
    }

    render() {
        return ( // make sure you return a div
            <div>
                <h2> {this.props.tweet} </h2> 
                {/* make sure the props match */}
                <button onClick={this.incrementLike}> ❤︎ {this.state.numLike} </button>
            </div>
        );
    }
}

export default Tweet;