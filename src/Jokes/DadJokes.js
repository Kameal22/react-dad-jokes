import "../Styles/DadJokes.css";
import { Component } from "react";
import JokesList from "./JokesList";
import ImportJokes from "./ImportJokes";
import axios from "axios";

const JOKES_API = "https://icanhazdadjoke.com/";

class DadJokes extends Component {
  static defaultProps = {
    jokesLimit: 10,
  };

  constructor(props) {
    super(props);
    this.state = {
      dadJokes: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchJokes();
  }

  fetchJokes = async () => {
    const jokes = [];
    this.setState({ loading: true });

    while (jokes.length < this.props.jokesLimit) {
      let joke = await axios
        .get(JOKES_API, {
          headers: {
            Accept: "application/json",
          },
        })
        .then((response) => response.data);

      if (!this.state.dadJokes.some((tmpJokes) => tmpJokes.id === joke.id)) {
        joke.score = 0;
        jokes.push(joke);
      }
    }

    this.setState({
      dadJokes: [...this.state.dadJokes, ...jokes],
      loading: false,
    });
  };

  sortJokesByScore = () => {
    this.state.dadJokes.sort((a, b) => b.score - a.score);
  };

  voteJoke = (id, isAdding) => {
    const votedJokes = this.state.dadJokes.map((joke) => {
      if (joke.id === id) {
        return { ...joke, score: isAdding ? joke.score + 1 : joke.score - 1 };
      }
      return joke;
    });

    this.setState({
      dadJokes: votedJokes,
    });
  };

  render() {
    this.sortJokesByScore();
    const { dadJokes } = this.state;
    if (!this.state.loading) {
      return (
        <div className="dadJokesDiv">
          <ImportJokes importJokes={this.fetchJokes} />
          <JokesList jokes={dadJokes} vote={this.voteJoke} />
        </div>
      );
    } else {
      return (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      );
    }
  }
}

export default DadJokes;
