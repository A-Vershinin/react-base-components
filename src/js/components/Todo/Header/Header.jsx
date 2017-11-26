import React from 'react';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header>
				<h1>{this.props.title}</h1>
			</header>
		)
	}
}

Header.propTypes = {
	title: React.PropTypes.string.isRequired
};


export default Header;
