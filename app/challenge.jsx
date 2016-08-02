var React = require('react')
var ReactDOM = require('react-dom')
var {Route, Router, IndexRoute, hashHistory} = require('react-router')
var Main = require('Main')
var Header = require('Header')
var About = require('About')
var Portfolio = require('Portfolio')



// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation()

//App css
require('style!css!applicationStyles')

let rootNode = document.getElementById('app')
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Header}/>
      <Route path="portfolio" component={Portfolio}/>
    </Route>
  </Router>, rootNode)
