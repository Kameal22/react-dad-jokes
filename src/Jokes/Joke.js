import '../Styles/Joke.css';
import {Component} from 'react'

class Joke extends Component{

  render(){
    return(
      <div>
          <h3>{this.props.joke}</h3>
      </div>
    )
  }
}

export default Joke;
