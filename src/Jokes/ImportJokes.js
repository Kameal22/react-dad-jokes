import '../Styles/ImportJokes.css';
import {Component} from 'react'

class ImportJokes extends Component{

    handleClick = () =>{
      this.props.importJokes()
    }

  render(){
    return(
      <div className = "importJokesDiv">

        <h2 className = "heading">Dad jokes</h2>

        <p className = "laughEmoji">&#128514;</p>

        <button className = "fetchJokesBtn" onClick = {this.handleClick}>New jokes!</button>
      </div>
    )
  }
}

export default ImportJokes;