import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainLayout } from "./components/Layout";
import { About, Home } from "./components/pages";
import "./App.css";

function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
