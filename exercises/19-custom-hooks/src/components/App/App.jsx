import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "../Nav/Nav";
import FontSelector from "../FontSelector/FontSelector";
import Preview from "../Preview/Preview";

function App() {
  return (
    <div className="container">
      <Nav />
      <Switch>
        <Route exact path="/font/select" component={FontSelector} />
        <Route exact path="/font/preview" component={Preview} />
        <Redirect to="/font/select" />
      </Switch>
    </div>
  );
}

export default App;
