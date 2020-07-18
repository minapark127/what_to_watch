import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, year, genres, rating, synopsis, language, image }) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            title,
            year,
            genres,
            rating,
            synopsis,
            language,
            image,
          },
        }}
      >
        <img
          className="movie__image"
          src={image}
          alt={title}
          title={title}
        ></img>
      </Link>
      <ul className="movie__info">
        <Link
          to={{
            pathname: `/movie/${id}`,
            state: {
              title,
              year,
              genres,
              rating,
              synopsis,
              language,
              image,
            },
          }}
        >
          <li className="movie__title">{title}</li>
        </Link>
        <li className="movie__genres">
          {genres.slice(0, 3).map((genre, index) => {
            if (index === 0) {
              return (
                <span key={index} className="movie__genres-genre">
                  {genre}
                </span>
              );
            } else if (index > 0) {
              return (
                <span key={index} className="movie__genres-genre">
                  {/* ,&nbsp;{genre} */}
                  &nbsp;|&nbsp;{genre}
                </span>
              );
            }
          })}
        </li>
        <li className="movie__rating">{rating}/10</li>
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  synopsis: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Movie;
