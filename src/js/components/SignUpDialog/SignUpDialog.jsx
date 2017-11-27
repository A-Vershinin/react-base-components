import React from "react";
import "./SignUpDialog.scss";

class FancyBorder extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
  <div className={`FancyBorder FancyBorder-${this.props.color}`}>
    {this.props.children}
  </div>
		);
	}
}

class Dialog extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
  <div style={{ borderBottom: "1px solid black", marginBottom: "15px" }}>
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {this.props.title}
      </h1>
      <p className="Dialog-message">
        {this.props.message}
      </p>
      {this.props.children}
    </FancyBorder>
  </div>
		);
	}
}


class SignUpDialog extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSignUp = this.handleSignUp.bind(this);
		this.state = { login: "" };
	}

	render() {
		return (
  <Dialog
    title="Mars Exploration Program"
    message="How should we refer to you?"
  >
    <input
      value={this.state.login}
      onChange={this.handleChange}
    />
    <button onClick={this.handleSignUp}>
					Sign Me Up!
    </button>
  </Dialog>
		);
	}

	handleChange(e) {
		this.setState({ login: e.target.value });
	}

	handleSignUp() {
		alert(`Welcome aboard, ${this.state.login}!`);
	}
}


export default SignUpDialog;
