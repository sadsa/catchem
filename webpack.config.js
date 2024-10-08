const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        KEYCLOAK_URL: JSON.stringify(process.env.KEYCLOAK_URL),
        KEYCLOAK_REALM: JSON.stringify(process.env.KEYCLOAK_REALM),
        KEYCLOAK_CLIENT_ID: JSON.stringify(process.env.KEYCLOAK_CLIENT_ID)
      }
    })
  ]
};