import { Switch, Route, Redirect } from "react-router-dom"; // Import things from React Router
import Subscribe from "../Subscribe/Subscribe";
import ThankYou from "../ThankYou/ThankYou";

function App() {
  return (
    <div className="uk-height-1-1 uk-flex uk-flex-column uk-flex-center">
      <Switch>
        <Route exact path="/subscribe" component={Subscribe} />
        <Route exact path="/thank-you" component={ThankYou} />
        {/* All other URLs are redirected to the "/subscribe" */}
        <Redirect to="/subscribe" />
      </Switch>
    </div>
  );
}

export default App;
