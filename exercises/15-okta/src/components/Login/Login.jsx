// Import things here
import { Redirect } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import NavBar from "../NavBar/NavBar";
import  OktaSignInWidget  from "./OktaSignInWidget";
import { useOktaAuth } from "@okta/okta-react"

function Login() {
  /**
   * Here is what is going on with "authState":
   * 1. "authState" is first equals null.
   * 2. An aysnc request is made to look up whether or not a user is logged in.
   * 3. If a user is logged in, then "authState" is set to an object and will equal { isAuthenticated: true }
   * If not logged in, then { isAuthenticated: false }
   */
  const { authState } = useOktaAuth();


  /*
   * Since "authState" will be null at first when it is looking up whether or not the user is logged in,
   * we will want to wait to render the Okta login form
   */
  if (!authState) {
    return <></>;
  }
  /**
   * If the user is logged in, redirect to main content.
   * Otherwise, display the Okta login form.
   */
   console.log(authState);
  return authState.isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <ErrorBoundary
      fallback={
        <div className="alert alert-danger" role="alert">
          Oops! There was a problem signing you in.
        </div>
      }
    >
      <NavBar />
      <OktaSignInWidget />
    </ErrorBoundary>
  );
}

export default Login;
