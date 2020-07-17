import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovieList = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies, isLoading: false });
    console.log(this.state.movies);
  };

  componentDidMount() {
    this.getMovieList();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
