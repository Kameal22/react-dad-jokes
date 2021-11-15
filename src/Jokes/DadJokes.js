import '../Styles/DadJokes.css';
import {Component} from 'react'
import JokesList from './JokesList';
import ImportJokes from './ImportJokes';
import axios from 'axios'

const JOKES_API = 'https://icanhazdadjoke.com/'

class DadJokes extends Component{

  constructor(props){
    super(props)
    this.state = {
        dadJokes : []
    }
}

componentDidMount(){
    this.fetchTenJokes()
}

fetchJoke = () =>{
        axios.get(JOKES_API, {
            headers : {
                Accept: 'application/json'
            }
        })
        .then(response =>{
          let joke = response.data.joke

          this.setState({
            dadJokes: [...this.state.dadJokes, joke]
          })
        })
        .catch(error =>{
          console.log(error)  
        })
}

fetchTenJokes = () =>{
    const jokesLimit = 10

    for(let i = 0; i < jokesLimit; i ++){
        this.fetchJoke()
    }
}

  render(){
    const {dadJokes} = this.state
    return(
      <div className = "dadJokesDiv">
        <ImportJokes importJoke = {this.fetchJoke} importJokes = {this.fetchTenJokes} />
        <JokesList jokes = {dadJokes} />
      </div>
    )
  }
}

export default DadJokes;
