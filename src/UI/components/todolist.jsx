"use strict";
var React = require("react");
var Task = require("./task.jsx");
var AddTask = require("./addtask.jsx");
require("./todolist.css");

var ToDoList = React.createClass({

	getInitialState: function() {
		return {
			tasks: []
		};
	},

	componentDidMount: function() {
		var tasks = this.state.tasks;
		tasks.push(<Task name="To meet Johanna" isActive={true}/>);
		tasks.push(<Task name="To buy milk" isActive={false}/>);
		this.forceUpdate();
	},

	addTask: function(taskText) {
		var tasks = this.state.tasks;
		tasks.push(<Task name={taskText} isActive={true}/>);
		this.forceUpdate();
	},

	render: function() {
		return (<div className="todo-list">
					{this.state.tasks}
					<AddTask addTask={this.addTask}/>
				</div>);
	}
});

module.exports = ToDoList;