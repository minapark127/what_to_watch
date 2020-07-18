import React from "react";

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
      return <div>{<h1>{location.state.title}</h1>}</div>;
    }
  }
}

export default Detail;
