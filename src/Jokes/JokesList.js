import '../Styles/JokesList.css';
import {Component} from 'react'
import Joke from './Joke';


class JokesList extends Component{



  render(){
    return(
      <div className = "jokesListDiv">

        {this.props.jokes.map(joke =>{
          return <Joke joke = {joke.joke} score = {joke.score} />
        })}

      </div>
    )
  }
}

export default JokesList;
