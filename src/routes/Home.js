import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import "./Home.scss";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovieList = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovieList();
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <div className="wrapper">
        {isLoading ? (
          <Loading />
        ) : (
          <section className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title_english}
                year={movie.year}
                genres={movie.genres}
                rating={movie.rating}
                synopsis={movie.synopsis}
                language={movie.language}
                image={movie.medium_cover_image}
                runtime={movie.runtime}
              />
            ))}
          </section>
        )}
      </div>
    );
  }
}

export default Home;
