import React from "react";
import ReactDOM from "react-dom";

/*
пример использования ссылок для очистки поля ввода. Функция clearInput ищет
элемент со значением ref = "myInput", затем сбрасывает состояние и добавляет
к нему фокус после того, как кнопка была нажата.
*/
class RefsExample extends React.Component {
	constructor(props) {
		super(props);
		this.state = { data: "" };
		this.updateState = this.updateState.bind(this);
		this.clearInput = this.clearInput.bind(this);
	}

	updateState(e) {
		this.setState({ data: e.target.value });
	}

	clearInput() {
		this.setState({ data: "" });
		ReactDOM.findDOMNode(this.refs.myInput).focus();
	}

	render() {
		return (
  <div style={{ borderBottom: "1px solid black" }}>
    <div>Пример использования ссылок ref для очистки поля ввода</div>
    <input value={this.state.data} onChange={this.updateState} ref="myInput" />
    <button onClick={this.clearInput}>CLEAR</button>
    <h4 style={{ margin: "5px" }}>{this.state.data}</h4>
  </div>
		);
	}
}

export default RefsExample;
