import React from "react";
import "./TodoItem.scss";

import Checkbox from "./Checkbox";
import Button from "./Button";


class TodoItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		const title = this.refs.title.value;
		this.props.onEdit(this.props.id, title);
		this.setState({ editing: false });
	}

	renderDisplay() {
		return (
  <div className={`todo-item ${this.props.completed ? "completed" : ""}`}>
    <Checkbox
      checked={this.props.completed}
					// onChange={this.props.onStatusChange.bind(null, this.props.id)}/>
					// алтернативный вариант привязки контекста с помощью стрел.функции
      onChange={() => { this.props.onStatusChange(this.props.id); }}
    />
    <span className="todo-title">{this.props.title}</span>
    <Button className="edit icon" icon="edit" onClick={() => this.setState({ editing: true })} />
    <Button
      className="delete icon"
      icon="delete"
      onClick={() => { this.props.onDelete(this.props.id); }}
    />
  </div>
		);
	}

	renderForm() {
		return (
  <form className="todo-edit-form" onSubmit={this.handleSubmit}>
    <input type="text" ref="title" defaultValue={this.props.value} />
    <Button className="save icon" icon="save" type="submit" />
  </form>
		);
	}

	render() {
		// вынесли то что должно рендерится в  зависимости от переменной в методы
		// if (this.state.editing) {
		// 	return (
		// 		<form className="todo-edit-form" onSubmit={this.handleSubmit}>
		// 			<input type="text" refs="title" defaultValue={this.props.value}/>
		// 			<Button className="save icon" icon="save" type="submit"/>
		// 		</form>
		// 	)
		// } else {
		// 	return (
		// 		<div className={`todo-item ${this.props.completed ? "completed" : ""}`}>
		// 			<Checkbox checked={this.props.completed}
		// 				// onChange={this.props.onStatusChange.bind(null, this.props.id)}/>
		// 				// алтернативный вариант привязки контекста с помощью стрел.функции
		// 				        onChange={() => {this.props.onStatusChange(this.props.id)}}/>
		// 			<span className="todo-title">{this.props.title}</span>
		// 			<Button className="edit icon" icon="edit"/>
		// 			<Button className="delete icon" icon="delete"
		// 			        onClick={() => {this.props.onDelete(this.props.id)}}/>
		// 		</div>
		// 	)
		// }
		return this.state.editing ? this.renderForm() : this.renderDisplay();
	}
}

TodoItem.propTypes = {
	title: React.PropTypes.string.isRequired,
	completed: React.PropTypes.bool.isRequired,
	onStatusChange: React.PropTypes.func.isRequired,
	onDelete: React.PropTypes.func.isRequired,
	onEdit: React.PropTypes.func.isRequired,
};


export default TodoItem;
