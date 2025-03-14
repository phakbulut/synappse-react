import React from "react";
import { Container, Form } from "reactstrap";
import "./../asset/css/main.css";
import "./../asset/css/login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

function Login() {
  return (
    <div className="d-flex justify-content-center vh-100 align-items-center">
      <Container className="loginContainer justify-content-center lg-5 md-5 sm-5 mb-2 w-60">
        <div className="loginWrapper">
          <Form>
            <div className="text-center mb-3">
              <img className="AppLogo" src="/asset/images/AppLogo.png" alt="AppLogo"></img>
            </div>

            <div className="register-input-group mb-3">
              <FontAwesomeIcon icon={faEnvelope} className="register-input-icon" />
              <input id="email" type="email" placeholder="E-mail" className="register-input" />
            </div>

            <div className="register-input-group mb-3">
              <FontAwesomeIcon icon={faLock} className="register-input-icon" />
              <input id="password" type="password" placeholder="Password" className="register-input" />
            </div>

            <div className="mb-3">
              <div className="rememberMe w-100">
                <div className="d-flex align-items-center ">
                  <label className="register-custom-checkbox">
                    <input id="rememberMe" type="checkbox" />
                    <span className="register-checkmark"></span>
                    <span>Remember Me</span>
                  </label>
                </div>
                <div className="ms-auto">
                  <p className="mb-0">Forgot Password?</p>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <button className="loginButton btn w-100">Login</button>
            </div>

            <div className="mb-3">
              <p className="text-center mb-0">Don't have an account? <a href="#">Sign up</a></p>
            </div>

            <div className="mb-3">
              <div className="d-flex align-items-center">
                <hr className="flex-grow-1" />
                <span className="mx-2">Or Continue With</span>
                <hr className="flex-grow-1" />
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-center gap-4">
                <button className="social-btn">
                  <FontAwesomeIcon icon={faGoogle} />
                </button>
                <button className="social-btn">
                  <FontAwesomeIcon icon={faFacebook} />
                </button>
              </div>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default Login;