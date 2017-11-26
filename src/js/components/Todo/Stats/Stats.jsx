import React from 'react';
import "./Stats.scss";


class Stats extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let total = this.props.todos.length;
		let completed = this.props.todos.filter(todo => todo.completed).length;
		let noCompleted = total - completed;

		return (
			<table className="stats">
				<tbody>
				<tr>
					<th>Всего задач:</th>
					<td>{total}</td>
				</tr>
				<tr>
					<th>Выполнено:</th>
					<td>{completed}</td>
				</tr>
				<tr>
					<th>Осталось:</th>
					<td>{noCompleted}</td>
				</tr>
				</tbody>
			</table>
		)
	}
}

Stats.propTypes = {
	todos: React.PropTypes.array.isRequired
};

export default Stats;
