import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact from="/" render={(props) => <Home {...props} />} />
        <Route exact path="/members" render={(props) => <About {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
