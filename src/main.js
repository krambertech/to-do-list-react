"use strict";
var React = require("react");
var $ = require("jquery");
var UI = require("./UI/UI.jsx"); 

$(document).ready(function(){
	React.renderComponent( UI({}), document.body);
});