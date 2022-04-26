import { Switch, Route, Redirect, useHistory } from "react-router-dom";
// Import things here
import { Security, SecureRoute } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { OKTA_OIDC_CONFIG } from "../../oktaConfig";

import Login from "../Login/Login";
import Home from "../Home/Home";

const oktaAuth = new OktaAuth(OKTA_OIDC_CONFIG);

function App() {
  const history = useHistory();
  /**
   * This is used to redirect the user to the login form if they are not logged in.
   */
  // Uncomment me
  const redirectToLogin = () => {
    history.push("/login");
  };

  // Uncomment me
  const restoreOriginalUri = async (_, originalUri) => {
    history.replace(toRelativeUrl(originalUri || "", window.location.origin));
  };

  return (
    <>
      {/* <Security /> sets up logging with Okta. It replaces <Switch /> */}
      <Security
        oktaAuth={oktaAuth}
        onAuthRequired={redirectToLogin}
        restoreOriginalUri={restoreOriginalUri}
      >
        <Route exact path="/login" component={Login} />
        <SecureRoute exact path="/home" component={Home} />
        <Redirect to="/home" />
      </Security>
    </>
  );
}

export default App;
