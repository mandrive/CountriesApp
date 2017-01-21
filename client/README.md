# CountriesApp
Countries App UI

This is frontend part of CountriesApp.
Tech stack used:
- ReactJs
- Redux
- Webpack
- Bootstrap v4

Skeleton of application was generated using Yeoman react-webpack-redux generator (https://github.com/stylesuxx/generator-react-webpack-redux) - just to save some time.
Minor, non relevant changes in webpack configuration has been applied during development.

For development, Node in version 7.2.1 and NPM in version 3.10.10 were used.

What has been implemented:
- list of countries displayed
- details of countries (country name and country capital name) are displayed after choosing country from list
- simple form for adding new countries

What was not implemented:
- removing countries - not added because of lack of time
- form validation - actually there is no validation at form at all
- action failures handling - application should handle properly requests with HTTP codes which means that server-side operation failed

Known limitations:
- redux state should be updated properly after new country is added rather than dispatching fetchCountries action again

How to start app:

1. npm install
2. npm start