var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

// LOAD FOUNDATION
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// APP CSS
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>,
  document.getElementById('app')
);
