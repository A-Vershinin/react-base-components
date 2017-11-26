import React from 'react';

//компонент в виде класса без ES6 классов
//особенность такого синтаксиса - автоматическая привязка методов(обработчиков) к объекту
// const Checkbox = React.createClass({
// 	// указываем тип данных по умолчанию
// 	propTypes: {
// 		initiallyChecked: React.PropTypes.bool.isRequired
// 	},
// 	// указываем свойство по умолчанию
// 	getDefaultProps() {
// 		return {
// 			initiallyChecked: false
// 		};
// 	},
// 	// определяем изначальное состояние свойств в стейте
// 	getInitialState() {
// 		return {
// 			checked: this.props.initiallyChecked
// 		};
// 	},
//
// 	handleClick() {
// 		this.setState({checked: !this.state.checked});
// 	},
//
// 	render() {
// 		return (
// 			<button className={this.props.className} onClick={this.handleClick}>
// 				<i className="material-icons">
// 					{this.state.checked ? "check_box" : "check_box_outline_black"}
// 				</i>
// 			</button>
// 		)
// 	}
// });


class Checkbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: this.props.initiallyChecked
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({checked: !this.state.checked});
	};

	render() {
		return (
			<button className={this.props.className} onClick={this.handleClick}>
				<i className="material-icons">
					{this.state.checked ? "check_box" : "check_box_outline_black"}
				</i>
			</button>
		)
	}
}

Checkbox.PropTypes = {
	initiallyChecked: React.PropTypes.bool.isRequired
};

export default Checkbox;
