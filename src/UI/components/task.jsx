"use strict";
var React = require("react");
require("./task.css");

var Task = React.createClass({

	getInitialState: function() {
		return {
			name: "Unnamed",
			isActive: true
		};
	},

	componentDidMount: function() {
		console.log(this.props.name);
		if (this.props.name) {
			this.setState({
				name: this.props.name
			});
		}

		if (!this.props.isActive) {
			this.setState({
				isActive: false
			});
		}

	},

	componentWillUnmount: function() {
		clearInterval(this.timer);
	},

	render: function() {
		var stateClass = this.state.isActive ? "task" : "task task--done";
		return (<div className={stateClass}> {this.state.name} </div>);
	}
});

module.exports = Task;