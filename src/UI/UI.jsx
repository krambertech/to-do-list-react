"use strict";
var React = require("react");
var ToDoList = require("./components/todolist.jsx");
require("./UI.css");

var UI = React.createClass({

	render: function() {
		return (<div className="todo"> 
					<div className="todo-header"> To Do List </div>
					<ToDoList />
				</div>);
	}
});

module.exports = UI;