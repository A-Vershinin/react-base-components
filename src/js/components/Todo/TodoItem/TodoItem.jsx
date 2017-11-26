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
				<Checkbox checked={this.props.completed}
					// onChange={this.props.onStatusChange.bind(null, this.props.id)}/>
					// алтернативный вариант привязки контекста с помощью стрел.функции
								onChange={() => {this.props.onStatusChange(this.props.id)}}/>
				<span className="todo-title">{this.props.title}</span>
				<Button className="delete icon" icon="delete"
				        onClick={() => {this.props.onDelete(this.props.id)}}/>
			</div>
		)
	}
}

TodoItem.propTypes = {
	title: React.PropTypes.string.isRequired,
	completed: React.PropTypes.bool.isRequired,
	onStatusChange: React.PropTypes.func.isRequired,
	onDelete: React.PropTypes.func.isRequired,
};


export default TodoItem;
