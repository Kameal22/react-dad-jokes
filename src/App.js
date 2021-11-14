import './Styles/App.css';
import {Component} from 'react'
import DadJokes from './Jokes/DadJokes';

class App extends Component{
  render(){
    return(
      <div className = "mainDiv">
        <DadJokes />
      </div>
    )
  }
}

export default App;
