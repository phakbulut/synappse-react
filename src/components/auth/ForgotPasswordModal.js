import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const ForgotPasswordModal = ({ isOpen, toggleForgotModal, handleChangePassword }) => {
  return (
    <Modal isOpen={isOpen}
      toggle={toggleForgotModal}
      centered
      scrollable={false}
      size="lg"
      autoFocus={true} >
      <ModalHeader toggle={toggleForgotModal}>Enter Your Code</ModalHeader>
      <ModalBody className="d-flex justify-content-center align-items-center">
        <FontAwesomeIcon icon={faLock} className="register-input-icon" />
        <input type="number" placeholder="Type your code" className="register-input" />
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleChangePassword}>Reset Password</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ForgotPasswordModal;