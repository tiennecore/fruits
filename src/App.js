import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" exact component={About}/>
              <Route component={NotFound}/>
          </Switch>
      </Router>

  );
}

export default App;


