// Import things here
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import NavBar from "../NavBar/NavBar";

function Login() {
  /**
   * If the user is logged in, this should redirect to main content.
   * Otherwise, display the Okta login form.
   */
  return (
    <ErrorBoundary
      fallback={
        <div className="alert alert-danger" role="alert">
          Oops! There was a problem signing you in.
        </div>
      }
    >
      <NavBar />
      <p className="container pt-2 pb-2">
        TODO put the <code>&lt;OktaSignInWidget /&gt;</code> here.
      </p>
    </ErrorBoundary>
  );
}

export default Login;
