import '../Styles/Joke.css';
import {Component} from 'react'

class Joke extends Component{

  render(){
    return(
      <div className = "singleJokeDiv">

        <div className = "voteDiv">
          {/* upwards arrow
          points
          downwards arrow */}
        </div>

        <h3>{this.props.joke}</h3>

        {/* Emoji */}

      </div>
    )
  }
}

export default Joke;
