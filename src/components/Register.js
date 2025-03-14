import React from "react";
import { Container, Form } from "reactstrap";
import "./../asset/css/main.css";
import "./../asset/css/login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faEyeSlash, faLock ,faUser} from '@fortawesome/free-solid-svg-icons';

function Register() {
  return (
    <div className="d-flex justify-content-center vh-100 align-items-center">
      <Container className="loginContainer justify-content-center lg-5 md-5 sm-5 mb-2 w-60">
        <div className="loginWrapper">
          <Form>
            <div className="text-center mb-3">
              <img className="AppLogo" src="/asset/images/AppLogo.png" alt="AppLogo"></img>
            </div>
            
            <div className="register-input-group mb-3">
                        <FontAwesomeIcon icon={ faUser} className="register-input-icon" />
              <input id="email" type="email" placeholder="E-mail" className="register-input" />
            </div>
            <div className="register-input-group mb-3">
              <FontAwesomeIcon icon={faEnvelope} className="register-input-icon" />
              <input id="email" type="email" placeholder="E-mail" className="register-input" />
            </div>
            
            <div className="register-input-group mb-3">
              <FontAwesomeIcon icon={faEyeSlash} className="register-input-icon" />
              <input id="password" type="password" placeholder="Password" className="register-input" />
            </div>

            <div className="register-input-group mb-3">
              <FontAwesomeIcon icon={faEyeSlash} className="register-input-icon" />
              <input id="confirmpassword" type="password" placeholder="Confirm Password" className="register-input" />
            </div>
            
            <div className="mb-3">
              <div className="align-items-center accepttc w-100">
                <label className="register-custom-checkbox">
                  <input id="rememberMe" type="checkbox" />
                  <span className="register-checkmark"></span>
                  <span>I accept the terms and conditions</span>
                </label>
              </div>
            </div>
            
            <div className="mb-3">
              <button className="loginButton btn w-100">Register</button>
            </div>
            
            <div className="mb-3">
              <p className="text-center mb-0">Also Have account  <a href="#">Login</a></p>
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

export default Register;