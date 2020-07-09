import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };
  plus = () => {
    this.setState((current) => ({ count: current.count + 1 }));
    // this.setState({ count: this.state.count + 1 });
    // both the same
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>Try plus or minus!</h1>
        <h2>Number: {this.state.count}</h2>
        <button onClick={this.plus}>plus</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default App;
