import React from "react";
import "./Form.scss";
import Button from "../TodoItem/Button";


class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = { title: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const title = event.target.value;
		this.setState({ title });
	}

	handleSubmit(event) {
		event.preventDefault();
		const title = this.state.title;
		if (title) {
			this.props.onAdd(title);
			this.setState({ title: "" });
		}
	}

	render() {
		return (
  <form className="todo-form" onSubmit={this.handleSubmit}>
    <input
      type="text"
      value={this.state.title}
      placeholder="Что нужно сделать?"
      onChange={this.handleChange}
    />
    <Button type="submit">Добавить</Button>
  </form>
		);
	}
}

Form.propTypes = {
	onAdd: React.PropTypes.func.isRequired,
};

export default Form;
