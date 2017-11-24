import React from "react";
import "./clickButton.scss"

class ClickButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {class: "off", label: "Жизненный цикл"};
		console.log("constructor");
		this.press = this.press.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		console.log("componentWillReceiveProps()");
	}
	componentWillMount(){
		console.log("componentWillMount()");
	}
	componentDidMount(){
		console.log("componentDidMount()");
	}
	componentWillUnmount(){
		console.log("componentWillUnmount()");
	}
	shouldComponentUpdate(){
		console.log("shouldComponentUpdate()");
		return true;
	}
	componentWillUpdate(){
		console.log("componentWillUpdate()");
	}
	componentDidUpdate(){
		console.log("componentDidUpdate()");
	}
	press(){
		let className = (this.state.class==="off")?"on":"off";
		this.setState({class: className});
	}

	render() {
		return (
			<div style={{paddingBottom: "30px", borderBottom: "1px solid black"}}>
				<div style={{fontSie: "20px"}}>Жизнейнный цикл компонента</div>
				<div>На каждом из этапов вызывается определенная функция, в которой
					мы можем определить какие-либо действия:</div>
				<ol style={{width: "750px", marginBottom: "10px"}}>
					<li style={{marginBottom: "5px"}}>constructor(props): конструктор, в котором происходит начальная инициализация компонента</li>
					<li style={{marginBottom: "5px"}}>componentWillMount(): вызывается непосредственно перед рендерингом компонента</li>
					<li style={{marginBottom: "5px"}}>render(): рендеринг компонента</li>
					<li style={{marginBottom: "5px"}}>componentDidMount(): вызывается после рендеринга компонента. Здесь можно выполнять
						запросы к удаленным ресурсам</li>
				</ol>
				<div>Кроме этих основных этапов жизненного цикла, также имеется еще ряд функций,
					которые вызываются при обновлении состояния после рендеринга компонента:</div>
				<ol style={{width: "750px", marginBottom: "10px"}}>
					<li style={{marginBottom: "5px"}}>shouldComponentUpdate(nextProps, nextState): вызывается каждый раз при обновлении объекта
						props или state. В качестве параметра передаются новый объект props и state. Эта функция
						должна возвращать true (надо делать обновление) или false (игнорировать обновление). По
						умолчанию возвращается true. Но если функция будет возвращать false, то тем самым мы отключим
						обновление компонента, а последующие функции не будут срабатывать.</li>
					<li style={{marginBottom: "5px"}}>componentWillUpdate(nextProps, nextState): вызывается перед обновлением компонента
						(если shouldComponentUpdate возвращает true)</li>
					<li style={{marginBottom: "5px"}}>render(): рендеринг компонента (если shouldComponentUpdate возвращает true)</li>
					<li style={{marginBottom: "5px"}}>componentDidUpdate(prevProps, prevState): вызывается сразу после обновления компонента
						(если shouldComponentUpdate возвращает true). В качестве параметров передаются старые
						значения объектов props и state.</li>
					<li style={{marginBottom: "5px"}}>И отдельно стоит отметить функцию componentWillReceiveProps(nextProps), которая вызывается
						при обновлении объекта props. Новые значения этого объекта передаются в функции в качестве
						параметра. Как правило, в этой функции устанавливаются те свойства компонента, в том числе из
						this.state, которые зависят от значений из props.</li>
				</ol>
				<button onClick={this.press} className={this.state.class}>{this.state.label}</button>
				<div>Все этапы смотреть в консоле</div>
			</div>
		)
	}
}


export default ClickButton;
