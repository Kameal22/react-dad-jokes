import '../Styles/JokesList.css';
import {Component} from 'react'
import Joke from './Joke';
import axios from 'axios'

const JOKES_API = 'https://icanhazdadjoke.com/'

class JokesList extends Component{

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
    return(
      <div className = "jokesListDiv">
          {this.state.dadJokes.map(joke =>{
              return <Joke joke = {joke} />
          })}
        <button onClick = {this.fetchTenJokes}>Fetch!</button>    
      </div>
    )
  }
}

export default JokesList;
