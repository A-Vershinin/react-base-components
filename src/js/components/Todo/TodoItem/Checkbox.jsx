import React from "react";

// компонент в виде класса без ES6 классов
// особенность такого синтаксиса - автоматическая привязка методов(обработчиков) к объекту
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

// стандартный es6 класс
// class Checkbox extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			checked: this.props.initiallyChecked
// 		};
// 		this.handleClick = this.handleClick.bind(this);
// 	}
//
// 	handleClick() {
// 		this.setState({checked: !this.state.checked});
// 	};
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
// }

// Checkbox.PropTypes = {
// 	initiallyChecked: React.PropTypes.bool.isRequired
// };

// С точки зрения построения органзации состояния всего приложения выполнять смену состояния
// компонента внутри компонента это плохая идея. В образовательных целях выше мы написали класс,
// чтобы увидеть простой компонет с состоянием. Чекбокс не должен изменять статус задачи, он
// должен просто отобразить правильную иконку. Какую именно - зависит от значения переменной
// checked, значения которой получает от родительского компонента. Т.к состояние чекбоксу не
// нужно, мы переделаем его в функциональный вид.
function Checkbox(props) {
	return (
  <button className="checkbox icon" onClick={props.onChange}>
    <i className="material-icons">{props.checked ? "check_box" : "check_box_outline_blank"}</i>
  </button>
	);
}


Checkbox.PropTypes = {
	checked: React.PropTypes.bool.isRequired,
	onChange: React.PropTypes.func.isRequired,
};

export default Checkbox;
