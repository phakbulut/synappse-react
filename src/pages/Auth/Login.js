import React, { useState, lazy, Suspense } from "react";
import { Container, Form } from "reactstrap";
import { useNavigate } from "react-router-dom"; // Yönlendirme için

import "./../../asset/css/main.css";
import "./../../asset/css/login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
const TypeMailModal = lazy(() => import('../../components/auth/TypeMailModal'));
const ForgotPasswordModal = lazy(() => import('../../components/auth/ForgotPasswordModal'));
const ChangePasswordModal = lazy(() => import('../../components/auth/ChangePasswordModal'));

function Login() {
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [typeMailModalOpen, setTypeMailModalOpen] = useState(false);
  const [changeModalOpen, setChangeModalOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Yüklenme durumu
  const navigate = useNavigate(); // Yönlendirme için

  const LoadingFallback = () => <div className="text-center p-3">Loading...</div>;

  const toggleForgotModal = () => {
    console.log("forgotModalı açıldı veya kapatıldı");
    setForgotModalOpen(!forgotModalOpen);
  };

  const toggleTypeMailModal = () => {
    console.log("typeMailModalı açıldı veya kapatıldı");
    setTypeMailModalOpen(!typeMailModalOpen);
  };

  const toggleChangeModal = () => {
    console.log("changeModalı açıldı veya kapatıldı");
    setChangeModalOpen(!changeModalOpen);
  };

  const handleSendCode = () => {
    console.log("sendCode fonksiyonu çağrıldı");
    setTypeMailModalOpen(false);
    setForgotModalOpen(true);
  };

  const handleChangePassword = () => {
    console.log("changePassword fonksiyonu çağrıldı");
    setForgotModalOpen(false);
    setChangeModalOpen(true);
  };
  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate('/main'); // Ana sayfaya yönlendir
    }, 500);
  };

  return (
    <div className="d-flex justify-content-center vh-100 align-items-center">
      <Container className="loginContainer justify-content-center lg-5 md-5 sm-5 mb-2 w-60">
        <div className="loginWrapper">
          <Form>
            <div className="text-center mb-3">
              <img className="AppLogo" src={process.env.PUBLIC_URL + '/asset/images/applogo.png'} alt="AppLogo" />
           
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
                  <p className="mb-0 forgotPassword" onClick={toggleTypeMailModal}>Forgot Password?</p>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <button className="loginButton btn w-100" onClick={handleLogin}>Login</button>
            </div>

            <div className="mb-3">
              <p className="text-center mb-0">Don't have an account? <a href="https://www.example.com">Sign up</a></p>
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
        {typeMailModalOpen && (
          <Suspense fallback={<LoadingFallback />}>
            <TypeMailModal 
              isOpen={typeMailModalOpen} 
              toggle={toggleTypeMailModal} 
              handleSendCode={handleSendCode} 
            />
          </Suspense>
        )}
        
        {forgotModalOpen && (
          <Suspense fallback={<LoadingFallback />}>
            <ForgotPasswordModal 
              isOpen={forgotModalOpen} 
              toggle={toggleForgotModal} 
              handleChangePassword={handleChangePassword} 
            />
          </Suspense>
        )}
        
        {changeModalOpen && (
          <Suspense fallback={<LoadingFallback />}>
            <ChangePasswordModal 
              isOpen={changeModalOpen} 
              toggle={toggleChangeModal} 
            />
          </Suspense>
        )}
        </Container>
        {loading && <div className="overlay"><div className="spinner">Loading...</div></div>} {/* Yüklenme animasyonu */}

    </div>
  );
}

export default Login;