/**
 * @jsx React.DOM
 */

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;

var DrKobros = require('./components/DrKobros.js');
var Recommended = require('./components/Recommended.js');
var Recommend = require('./components/Recommend.js');
var Recommendations = require('./components/Recommendations.js');
var Certifications = require('./components/Certifications.js');
var Dashboard = require('./components/Dashboard.js');
var Home = require('./components/Home.js');

// React dev tools enable haxor
window.React = React; 

var routes = (
  <Routes location="hash">
    <Route name="home" handler={DrKobros} path="/">

        <Route name="recommendations" path="recommends" handler={Recommendations}>
            <DefaultRoute handler={Recommend}/>
            <Route name="recommended" path=":recommendation" handler={Recommended}/>
        </Route>

        <Route name="certifications" path="certifications" handler={Certifications}></Route>
        <Route name="dashboard" path="dashboard" handler={Dashboard}></Route>

        <DefaultRoute handler={Home}/>
    </Route>
  </Routes>
);

React.renderComponent(routes, document.getElementById('app'));
