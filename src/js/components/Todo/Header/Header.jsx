import React from 'react';
import Stats from "../Stats/Stats";


class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className="todo-header">
				<Stats todos={this.props.todos}/>
				<h1>{this.props.title}</h1>
			</header>
		)
	}
}

Header.propTypes = {
	title: React.PropTypes.string.isRequired,
	todos: React.PropTypes.array.isRequired
};


export default Header;
