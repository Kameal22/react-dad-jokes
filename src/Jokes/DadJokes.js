import '../Styles/DadJokes.css';
import {Component} from 'react'
import JokesList from './JokesList';
import ImportJokes from './ImportJokes';
import axios from 'axios'

import { v4 as uuidv4 } from 'uuid';

const JOKES_API = 'https://icanhazdadjoke.com/'

class DadJokes extends Component{

  static defaultProps = {
    jokesLimit : 10
  }

  constructor(props){
    super(props)
    this.state = {
        dadJokes : [
        ]
    }
}

componentDidMount(){
    this.fetchJokes()
}

fetchJoke = () =>{
  axios.get(JOKES_API, {
      headers : {
          Accept: 'application/json'
      }
  })
  .then(response =>{
    let joke = response.data.joke

    this.setState(prevState => ({
      dadJokes: [...prevState.dadJokes, {joke : joke, score : 0, voteLimit : false, id : uuidv4()}]
    }))
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

fetchJokes = async () =>{
  let jokes = [];

  while(jokes.length < this.props.jokesLimit){
    await axios.get(JOKES_API, {
      headers: {
        Accept : 'application/json'
      }
    }).then(response => response.data)
      .then(joke => jokes.push(joke))
  }
  console.log(jokes)
  
  this.setState({dadJokes: [...this.state.dadJokes, ...jokes]})
}

sortJokesByScore = () =>{
  this.state.dadJokes.sort((a,b) => b.score - a.score)
}

voteJoke = (id, isAdding) =>{
  const votedJokes = this.state.dadJokes.map(joke =>{
    if(joke.id === id){
      return {...joke, score : isAdding ? joke.score + 1 : joke.score - 1}
    }
    return joke
  })

  this.setState({
    dadJokes : votedJokes
  })
}

  render(){
    this.sortJokesByScore()
    const {dadJokes} = this.state
    return(
      <div className = "dadJokesDiv">
        <ImportJokes importJoke = {this.fetchJoke} importJokes = {this.fetchTenJokes} />
        <JokesList jokes = {dadJokes} vote = {this.voteJoke} />
      </div>
    )
  }
}

export default DadJokes;