import React from "react";
/*
Установливаем таймер, когда Clock выводятся в DOM впервые.
*/
class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
}
/*
Привязка componentDidMount() выполнятся после того, как результат
выполнения компонента выводится в DOM. Здесь как раз подходящее место для таймера:
*/
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000,
		);
	}

/*
Обратите внимание, что мы сохраняем ID таймера в this.
В то время как React устанавливает  this.props, а this.state имеет особое значение,
вы можете вручную добавлять дополнительные поля к классу, если вы хотите хранить
то, что не используется для визуального вывода.
Если вы ничего не используете в render(), то не нужно ничего добавлять.
Мы разберем таймер в привязке жизненного цикла componentWillUnmount():
*/
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date(),
		});
	}

	render() {
		return (
  <div style={{ borderBottom: "1px solid black", marginBottom: "15px" }}>
    <h1>Hello, componentDidMount!</h1>
    <h2>It is clock example {this.state.date.toLocaleTimeString()}.</h2>
  </div>
		);
	}
}


export default Clock;
