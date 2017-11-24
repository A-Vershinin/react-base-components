import React from 'react';
import AgeField from "./AgeField/AgeField.jsx";
import NameField from "./NameField/NameField.jsx";

class UserForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		const name = this.refs.nameField.state.value;
		const age = this.refs.ageField.state.value;
		if(this.refs.nameField.state.valid && this.refs.ageField.state.valid){
			alert("Имя: " + name + " Возраст: " + age);
		}
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} style={{borderBottom: "1px solid" +
			" black", paddingBottom: "10px", marginBottom: "20px", paddingTop: "15px"}}>
				<div>Пример формы с вводоном данных и валидацией refs значений</div>
				<NameField value={this.props.valueNameField} ref={this.props.refName} />
				{/*<NameField value="" ref="nameField" />*/}
				<AgeField value={this.props.refAge} ref={this.props.ageNameField}/>
				{/*<AgeField value="3" ref="ageField" />*/}
				<input type="submit" value="Отправить" />
			</form>
		);
	}
}
//Валидация refs по типу, установка значений по умолчанию
// значения по-умолчанию
UserForm.defaultProps = {
	valueNameField: "",
	refName: "nameField",
	ageNameField: "ageField",
	refAge: 5
};

// тип данных по умолчанию
UserForm.propTypes  = {
	valueNameField: React.PropTypes.string,
	refName: React.PropTypes.string,
	ageNameField: React.PropTypes.string,
	refAge: React.PropTypes.number
};

export default UserForm;
