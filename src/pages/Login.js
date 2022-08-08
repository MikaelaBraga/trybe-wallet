import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setEmailUser } from '../actions/index';

import '../styles/login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      buttonDisabled: true,
    };

    this.emailAndPasswordValidation = this.emailAndPasswordValidation.bind(this);
    this.handleChangeEmailAndPassword = this.handleChangeEmailAndPassword.bind(this);
    this.handleSubmitEmailToStore = this.handleSubmitEmailToStore.bind(this);
  }

  handleChangeEmailAndPassword({ target: { name, value } }) {
    this.setState({ [name]: value }, () => this.emailAndPasswordValidation());
  }

  handleSubmitEmailToStore() {
    const { email } = this.state;
    const { setEmailAction } = this.props;
    setEmailAction(email);
  }

  emailAndPasswordValidation() {
    const { email, password } = this.state;
    const emailValidation = /(.*)@(.*).com/;
    const passwordValidationLenth = 6;

    if (emailValidation.test(email) && password.length >= passwordValidationLenth) {
      this.setState({
        buttonDisabled: false,
      });
    } else {
      this.setState({
        buttonDisabled: true,
      });
    }
  }

  render() {
    const { email, password, buttonDisabled } = this.state;
    return (
      <div className="container-login">
        <h1>Digital Wallet</h1>
        <form className="form-login">
          <label htmlFor="input-email">
            <input
              type="email"
              name="email"
              data-testid="email-input"
              placeholder="Insira seu email"
              value={ email }
              onChange={ this.handleChangeEmailAndPassword }
            />
          </label>
          <label htmlFor="input-password">
            <input
              type="password"
              name="password"
              data-testid="password-input"
              placeholder="Insira sua senha"
              value={ password }
              onChange={ this.handleChangeEmailAndPassword }
            />
          </label>
          <Link to="/carteira">
            <button
              className="button-login"
              type="button"
              disabled={ buttonDisabled }
              onClick={ this.handleSubmitEmailToStore() }
            >
              Entrar

            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmailAction: (payload) => dispatch(setEmailUser(payload)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  setEmailAction: PropTypes.func,
}.isRequired;
