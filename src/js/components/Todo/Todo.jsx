import React from "react";
import "./Todo.scss";

import Header from "./Header/Header";
import TodoItem from "./TodoItem/TodoItem";
import Form from "./Form/Form";

class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { todos: this.props.initialData };
		this.handleStatusChange = this.handleStatusChange.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	handleStatusChange(id) {
		const todos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
		this.setState({ todos });
	}

	handleDelete(id) {
		const todos = this.state.todos.filter(todo => todo.id !== id);
		this.setState({ todos });
	}

	nextId() {
		this.nextId = this.nextId || 4;
		return this.nextId += 1;
	}

	handleAdd(title) {
		const todo = {
			id: this.nextId(),
			title,
			completed: false,
		};
		const todos = [...this.state.todos, todo];
		this.setState({ todos });
	}

	handleEdit(id, title) {
		const todos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				todo.title = title;
			}
			return todo;
		});
		this.setState({ todos });
	}

	render() {
		return (
  <main className="todo-app">
    <Header title={this.props.title} todos={this.state.todos} />
    <section className="todo-list">
      {this.state.todos.map(todo =>
        (<TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          onStatusChange={this.handleStatusChange}
          onDelete={this.handleDelete}
          onEdit={this.handleEdit}
        />))
					}
      <Form onAdd={this.handleAdd} />
    </section>
  </main>
		);
	}
}

Todo.PropTypes = {
	title: React.PropTypes.string,
	initialData: React.PropTypes.arrayOf(React.PropTypes.shape({
		id: React.PropTypes.number.isRequired,
		title: React.PropTypes.string.isRequired,
		completed: React.PropTypes.bool.isRequired,
	})).isRequired,
};

Todo.defaultProps = {
	title: "React Todo",
};

export default Todo;
