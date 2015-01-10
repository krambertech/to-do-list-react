"use strict";
var React = require("react");
require("./addtask.css");
var ENTER = 13;

var AddTask = React.createClass({

	getInitialState: function() {
		return {
			name: ""
		};
	},

	componentDidMount: function() {

	},

	componentWillUnmount: function() {
		clearInterval(this.timer);
	},

	addTask: function(e) {
		if(e.keyCode == ENTER) {
			if (this.props.addTask) {
				this.props.addTask(e.target.value);
				e.target.value = "";
			}
		}
	},

	render: function() {
		return (<div className="add-task"> 
					<input  type="text" placeholder="Add task..." 
							onKeyDown={this.addTask}/>
				</div>);
	}
});

module.exports = AddTask;