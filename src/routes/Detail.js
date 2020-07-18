import React from "react";

function Detail(props) {
  console.log(props.history.location.state);
  const title = props.history.location.state.title;
  return <div>{title}</div>;
}

export default Detail;
