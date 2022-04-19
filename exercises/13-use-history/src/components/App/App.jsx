// Import things from React Router
import Subscribe from "../Subscribe/Subscribe";
import ThankYou from "../ThankYou/ThankYou";
import { Switch, Route, Redirect } from "react-router-dom"

function App() {
  return (
    <div className="uk-height-1-1 uk-flex uk-flex-column uk-flex-center">
      <Switch>
        <Route exact path="/thank-you" component={ThankYou} />
        <Route exact path="/subscribe" component={Subscribe} />
        <Redirect to="/subscribe" />
      </Switch>
    </div>
  );
}

export default App;
