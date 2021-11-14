import '../Styles/DadJokes.css';
import {Component} from 'react'
import JokesList from './JokesList';
import ImportJokes from './ImportJokes';


class DadJokes extends Component{

  render(){
    return(
      <div className = "dadJokesDiv">
        <ImportJokes />
        <JokesList />
      </div>
    )
  }
}

export default DadJokes;
