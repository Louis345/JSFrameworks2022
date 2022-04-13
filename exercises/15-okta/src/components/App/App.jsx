import { Switch, Route, useHistory } from "react-router-dom";
// Import things here

import Login from "../Login/Login";
import Home from "../Home/Home";

function App() {
  const history = useHistory();
  /**
   * This is used to redirect the user to the login form if they are not logged in.
   */
  // Uncomment me
  // const redirectToLogin = () => {
  //   history.push("/login");
  // };

  // Uncomment me
  // const restoreOriginalUri = async (_, originalUri) => {
  //   history.replace(toRelativeUrl(originalUri || "", window.location.origin));
  // };

  return (
    <>
      {/* <Security /> sets up logging with Okta. It replaces <Switch /> */}
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
