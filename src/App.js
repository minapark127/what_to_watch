import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

library.add(fas);

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      {/* <Route path="/about" component={About} /> */}
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
