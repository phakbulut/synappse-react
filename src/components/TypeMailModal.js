import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const TypeMailModal = ({ isOpen, toggle, handleSendCode }) => {
  return (
    <Modal isOpen={isOpen}
      toggle={toggle}
      centered
      scrollable={false}
      size="lg"
      autoFocus={true} >
      <ModalHeader toggle={toggle}>Type Your E-mail</ModalHeader>
      <ModalBody className="d-flex justify-content-center align-items-center">
        <FontAwesomeIcon icon={faLock} className="register-input-icon" />
        <input type="email" placeholder="Type your e-mail" className="register-input" />
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSendCode}>Send Code</Button>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default TypeMailModal;