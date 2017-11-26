import React from 'react';
import "./TodoItem.scss";

import Checkbox from "./Checkbox";
import Button from "./Button";


class TodoItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={`todo-item ${this.props.completed ? "completed" : ""}`}>
				<Checkbox className="checkbox icon" initiallyChecked={this.props.completed}/>
				<span className="todo-title">{this.props.title}</span>
				<Button className="delete icon" icon="delete"/>
			</div>
		)
	}
}

TodoItem.propTypes = {
	title: React.PropTypes.string.isRequired,
	completed: React.PropTypes.bool.isRequired
};


export default TodoItem;
