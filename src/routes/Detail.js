import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Detail.scss";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (!location.state) {
      return null;
    } else {
      const titleHTML = document.querySelector("title");
      const { state } = location;
      titleHTML.innerHTML = `${state.title}`;
      const runtimeHr = Math.floor(state.runtime / 60);
      const runtimeMin = state.runtime % 60;
      return (
        <div className="detail">
          <img
            className="detail__image"
            src={state.image}
            alt={state.title}
            title={state.title}
          ></img>
          <section className="detail__info">
            <h2 className="detail__info__title">{state.title}</h2>
            <div className="detail__info__genres">
              {state.genres.slice(0, 3).map((genre, index) => {
                if (index === 0) {
                  return (
                    <span key={index} className="detail__info__genres-genre">
                      {genre}
                    </span>
                  );
                } else if (index > 0) {
                  return (
                    <span key={index} className="detail__info__genres-genre">
                      {/* ,&nbsp;{genre} */}
                      &nbsp;|&nbsp;{genre}
                    </span>
                  );
                }
              })}
            </div>
            <ul className="detail__info__misc">
              <li className="detail__info__misc-runtime">
                <FontAwesomeIcon icon="clock" />
                {runtimeHr}HR&nbsp;
                {runtimeMin}MIN
              </li>
              <li className="detail__info__misc-language">
                <FontAwesomeIcon icon="microphone-alt" />
                {state.language}
              </li>
              <li className="detail__info__misc-year">
                <FontAwesomeIcon icon="video" />
                {state.year}
              </li>
              <li className="detail__info__misc-rating">
                <FontAwesomeIcon icon="star" />
                {state.rating}/10
              </li>
            </ul>
            <article className="detail__info__synopsis">
              <h3>Synopsis</h3>
              <p>{state.synopsis}</p>
            </article>
          </section>
        </div>
      );
    }
  }
}

export default Detail;
