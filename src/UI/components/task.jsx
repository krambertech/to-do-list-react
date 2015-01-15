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

	doTask: function() {
		this.setState({
			isActive: !this.state.isActive
		});
		
	},

	render: function() {
		var stateClass = this.state.isActive ? "task" : "task task--done";
		return (<div className={stateClass}
				     onClick={this.doTask}> {this.state.name} </div>);
	}
});

module.exports = Task;