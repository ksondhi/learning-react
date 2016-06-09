var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var HashHistory = ReactRouter.hashHistory;

var Main = require('../components/main');
var Home = require('../components/home');
var PromptContainer = require('../container/promptContainer')

var routes = (
    <Router history={HashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home}/>
            <Route path='playerOne' header='Player One' component={PromptContainer}/>
            <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer}/>
        </Route>
    </Router>
);

module.exports = routes;