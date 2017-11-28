import React from "react";
import "./Todo.scss";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Header from "./Header/Header";
import TodoItem from "./TodoItem/TodoItem";
import Form from "./Form/Form";
import axios from "../../../../node_modules/axios/index";


class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		};
		this.handleToggle = this.handleToggle.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	};

	// метод делает асинхронный запрос на сервер за json-файлом
  // и забираем массив todos, обновляем стейт приложения с данными от сервера
	componentDidMount() {
    // fetch("http://localhost:3000/api/todos") // проверяем просто что файл грузится с сервера
    // fetch("/api/todos") // переделали на реализованный API запрос на сервере
    axios("/api/todos") // используем axios для получения данных с сервере
      .then(response => response.data) // json() => data
      .then(todos => this.setState({ todos: todos}))
      .catch(error => this.handleError);
  }

	handleToggle(id) {
		const todos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
		this.setState({ todos });
	}

	handleDelete(id) {
    // после добавления axios редактируем метод для удаления
    // axios.delete(`/api/todos/${id}`)
    //   .then(() => {
    //     const todos = this.state.todos.filter(todo => todo.id !== id);
    //     this.setState({ todos: todos });
    //   })
    //   .catch(this.handleError);
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });
	}

	// после того как добавили получение массива от сервера и забираем
  // объекты с полями, метод nextId который увеличивал id на 1 не нужен
	nextId() {
		this._nextId = this._nextId || 4;
		return this._nextId += 1;
	}

	handleAdd(title) {
	  // axios.post("/api/todos", {title: title})
     //  .then(response => response.data)
     //  .then(todo => {
     //    const todos = [...this.state.todos, todo];
     //    this.setState({ todos: todos });
     //  })
     //  .catch(error => this.handleError);
	  // т.к получаем теперь новый объект с веб-сервера, то содавать вручную не надо
    // во втором then получаем объект с нужными полями и обновляем стейт

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

  handleError(error) {
	  console.log(error);
  }

	render() {
		return (
      <main className="todo-app">
        <Header title={this.props.title} todos={this.state.todos} />
        <ReactCSSTransitionGroup
          component="section" className="todo-list"
          transitionName="slide" transitionEnterTimeout={500} transitionLeaveTimeout={500}
          // transitionEnter={false} //чтобы убрать аниацию при старте
          // transitionLeave={false} //чтобы убрать аниацию при удалении
          transitionAppear={true} //на этапе установки компонента добавляется класс
          transitionAppearTimeout={500} //при появлении основного компонента в Dom ему
          //будет добавлен класс slide-appear и через 500ms класс slide-appear-active
        >
          {this.state.todos.map((todo) =>
            (<TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onStatusChange={this.handleToggle}
              onDelete={this.handleDelete}
              onEdit={this.handleEdit}
            />)
          )}
          <Form onAdd={this.handleAdd} />
        </ReactCSSTransitionGroup>
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
