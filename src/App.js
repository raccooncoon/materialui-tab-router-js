import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";

function App() {
  return (
    <Switch>
      <Redirect exact from="/home" to="/home/about" />
      <Redirect exact from="/" to="/home/about" />
      <Route
        exact
        path="/home/:page?"
        render={(props) => <Home {...props} />}
      />
    </Switch>
  );
}

export default App;
