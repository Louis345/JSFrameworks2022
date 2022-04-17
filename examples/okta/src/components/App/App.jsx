import { Route, Redirect, useHistory } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { OKTA_APP_REDIRECT_URI, OKTA_OIDC_CONFIG } from "../../oktaConfig";

import Login from "../Login/Login";
import Home from "../Home/Home";

const oktaAuth = new OktaAuth(OKTA_OIDC_CONFIG);

function App() {
  const history = useHistory();
  /**
   * This is used to redirect the user to the login form if they are not logged in.
   */
  const redirectToLogin = () => {
    history.push("/login");
  };

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
        {/* The login flow works like this: 1.) A user enters their credentials in a login form and clicks "Sign In" 2.) They are redirected to Okta's website, which will check to see if they are a user with valid credentials. If they have valid login credentials, 3.) Okta's website will redirect to Okta's "LoginCallback" component, which will store an access and ID token. */}

        <Route exact path="/login" component={Login} />

        <Route exact path={OKTA_APP_REDIRECT_URI} component={LoginCallback} />

        {/* The SecureRoute will redirect the user to "/login" if they aren't logged in. */}
        <SecureRoute exact path="/home" component={Home} />
        <Redirect to="/home" />
      </Security>
    </>
  );
}

export default App;
