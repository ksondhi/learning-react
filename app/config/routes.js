var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var HashHistory = ReactRouter.hashHistory;

var Main = require('../components/main');
var Home = require('../components/home');

var routes = (
	<Router history = {HashHistory}>
		<Route path='/' component = {Main} >
			<IndexRoute component = {Home} />
		</Route>
	</Router>
);

module.exports = routes;