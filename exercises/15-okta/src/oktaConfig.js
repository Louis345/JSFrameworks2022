/**
 * Update me to be the credentials of your Okta app
 */
const OKTA_ISSUER = process.env.REACT_APP_OKTA_ISSUER;
const OKTA_APP_CLIENT_ID = process.env.REACT_APP_OKTA_CLIENT_ID;

const SCOPES = ["openid", "profile", "email"];

export const OKTA_APP_REDIRECT_URI = `${window.location.origin}/login/callback`;

export const OKTA_OIDC_CONFIG = {
  issuer: OKTA_ISSUER,
  clientId: OKTA_APP_CLIENT_ID,
  redirectUri: OKTA_APP_REDIRECT_URI,
  scopes: SCOPES,
};

export const OKTA_WIDGET_CONFIG = {
  issuer: OKTA_ISSUER,
  clientId: OKTA_APP_CLIENT_ID,
  redirectUri: OKTA_APP_REDIRECT_URI,
  scopes: SCOPES,
  useInteractionCodeFlow: false,
};
