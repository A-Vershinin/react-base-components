import React from 'react';

class Button extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button className="delete icon" onClick={this.props.onClick}>
				<i className="material-icons">{this.props.icon}</i>
			</button>
		)
	}
}

Button.propTypes = {
	className: React.PropTypes.string,
	icon: React.PropTypes.string,
	onClick: React.PropTypes.func
};


export default Button;
