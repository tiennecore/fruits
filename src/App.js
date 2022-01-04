import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Grenade from "./pages/fruits/Grenade";
import Annanas from "./pages/fruits/Annanas";
import Litchi from "./pages/fruits/Litchi";
import Goyave from "./pages/fruits/Goyave";
import Figue from "./pages/fruits/Figue";
import Mangue from "./pages/fruits/Mangue";

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
          <Switch>
              <Route path="/Grenade" exact component={Grenade}/>
              <Route path="/Annanas" exact component={Annanas}/>
              <Route path="/Litchi" exact component={Litchi}/>
              <Route path="/Goyave" exact component={Goyave}/>
              <Route path="/Figue" exact component={Figue}/>
              <Route path="/Mangue" exact component={Mangue}/>
              <Route path="/" exact component={Home}/>
              <Route path="/about" exact component={About}/>
              <Route component={NotFound}/>
          </Switch>
      </Router>

  );
}

export default App;


