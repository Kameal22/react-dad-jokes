import '../Styles/JokesList.css';
import {Component} from 'react'
import Joke from './Joke';

class JokesList extends Component{



  render(){
    return(
      <div className = "jokesListDiv">
          <Joke />
      </div>
    )
  }
}

export default JokesList;
