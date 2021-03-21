import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListPokemon from "./Components/ListPokemon";
import SinglePokemon from "./Components/SinglePokemon";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <ListPokemon />
          </Route>
          <Route path="/pokemon">
            <SinglePokemon />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
