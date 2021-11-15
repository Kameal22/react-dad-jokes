import '../Styles/Joke.css';
import {Component} from 'react'

class Joke extends Component{

  render(){
    return(
      <div className = "wholeJokeDiv">

        <div className = "voteDiv">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
          </svg>

          <div className = "voteScore">
            <p>{this.props.score}</p>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
          </svg>
        </div>

        <div className = "jokeDiv">
          <h3>{this.props.joke}</h3>
        </div>  

        <div className = 'emojiDiv'>
          <p>&#128528;</p>
        </div>

      </div>
    )
  }
}

export default Joke;
