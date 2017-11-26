import React from 'react';
import "./Todo.scss";
import todos from "./todo.js";
import Header from "./Header/Header";
import TodoItem from "./TodoItem/TodoItem";



class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {todos};
	}

	render() {

		return (
			<main className="todo-app">
				<Header title={this.props.title}/>
				<section className="todo-list">
					{this.state.todos.map(todo =>
						<TodoItem key={todo.id} title={todo.title} completed={todo.completed}/>)
					}
				</section>
			</main>
		)
	}
}
Todo.PropTypes = {
	title: React.PropTypes.string,
	todos: React.PropTypes.arrayOf(React.PropTypes.shape({
		id: React.PropTypes.number.isRequired,
		title: React.PropTypes.string.isRequired,
		completed: React.PropTypes.bool.isRequired
	})).isRequired,
};

Todo.defaultProps = {
	title: "React Todo"
};

export default Todo;
