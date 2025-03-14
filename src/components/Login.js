import React from "react";
import { Container, Form, FormGroup, Row } from "reactstrap";
import "./../asset/css/main.css";
import "./../asset/css/login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

function Login() {
  return (
    <div className="d-flex justify-content-center vh-100 align-items-center">

      <Container className="loginContainer justify-content-center lg-5 md-5 sm-5 mb-2 w-50">
        <div className="loginWrapper">

          <Form>
            <div className="text-center mb-3" >
              <img className="AppLogo" src="/asset/images/AppLogo.png" alt="AppLogo"></img>

            </div>
            <FormGroup>
              <Row className="input-group">
                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                <input id="email" type="email" placeholder="E-mail" />
              </Row>
              <Row className="input-group">
                <FontAwesomeIcon icon={faLock} className="input-icon" />
                <input id="password" type="password" placeholder="Password" />
              </Row>
              <Row className=" mb-3">
                <div className="rememberMe w-100 ">
                  <div className="d-flex align-items-center"></div>
                  <input id="rememberMe" type="checkbox"></input>
                  <label htmlFor="rememberMe" className="ms-2 mb-0 ">Remember Me</label>


                  <div className="ms-auto">
                    <p className="mb-0">Forgot Password?</p>
                  </div>

                </div>
              </Row>
              <Row>
                <button className="loginButton btn  w-100">Login</button>
              </Row>
              <Row className="mt-3">
                <p className="text-center mb-0">Don't have an account? <a href="#">Sign up</a></p>
              </Row>
              <Row className="mt-3">
                <div className="d-flex align-items-center">

                <hr className="flex-grow-1" />
                <span className="mx-2">Or Continue With</span>
                <hr className="flex-grow-1" />
                </div>
              </Row>
              <Row className="mt-3">
               <div className="d-flex justify-content-center gap-4">
                <button className="social-btn ">
                  <FontAwesomeIcon icon={faGoogle} />
                </button>
                <button className="social-btn ">
                  <FontAwesomeIcon icon={faFacebook} />
                </button>
                
               </div>
              </Row>
            </FormGroup>
          </Form>
        </div>
      </Container>

    </div>

  );
}

export default Login; 