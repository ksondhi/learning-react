var USER_DATA = {
	name: 'Kabir Sondhi',
	username: 'ksondhi',
	image: 'http://ilarge.lisimg.com/image/2994586/1104full-milla-jovovich.jpg'
}

var React = require('react');
var ReactDOM = require('react-dom');

var Routes = require('./config/routes');

/*
var ProfilePic = React.createClass({
	render: function() {
		return <img src = {this.props.imageUrl} style = {{height: 100, width: 100}} />
	}

})

var Link = React.createClass({
	changeUrl: function() {
		window.location.replace(this.props.href);
	},

	render: function() {
		return (
			<span 
				style={{color: 'blue', cursor: 'pointer'}}
				onClick = {this.changeUrl}>
				{this.props.children}
			</span>
		)
	}
})

var ProfileLink = React.createClass({
	render: function() {
		return (
			<div>
				<Link href= {"https://www.github.com/" + this.props.username} >
					{this.props.username}
				</Link>
			</div>
		)

	}
})

var ProfileName = React.createClass({
	render: function() {
		return (
			<div> {this.props.name} </div>
		)
	}

})

var Avatar = React.createClass({
	render: function() {
		return (
			<div>
				<ProfilePic imageUrl = {this.props.user.image} />
				<ProfileName name = {this.props.user.name} />
				<ProfileLink username = {this.props.user.username} />
			</div>
			)
	}

})


ReactDOM.render( 
	<Avatar user = {USER_DATA} />,
	document.getElementById('app')
)

*/

ReactDOM.render(
	Routes,
	document.getElementById('app')
);

