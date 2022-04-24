import { useEffect, useRef } from "react";
import { useOktaAuth } from "@okta/okta-react";
import OktaSignIn from "@okta/okta-signin-widget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
import { OKTA_WIDGET_CONFIG } from "../../oktaConfig";

function OktaSignInWidget() {
  const { oktaAuth, authState } = useOktaAuth();
  const widgetRef = useRef();

  useEffect(() => {
    /**
     * Return if the <div> below hasn't rendered yet or if Okta isn't ready to render yet.
     */
    if (!widgetRef.current || !authState) {
      return false;
    }
    /**
     * Creates the login form as Vanilla JavaScript
     */
    const widget = new OktaSignIn(OKTA_WIDGET_CONFIG);
    widget
      .showSignInToGetTokens({
        el: widgetRef.current,
      })
      .then((tokens) => {
        /**
         * Once logged in, this stores the access token in local state, which determines whether on the user is logged in.
         */
        oktaAuth.handleLoginRedirect(tokens);
      });

    return () => widget.remove();
  }, []);
  /**
   * Using a ref injects the Okta login form, which is Vanilla JavaScript, into your React application
   */
  return <div ref={widgetRef} />;
}

export default OktaSignInWidget;
