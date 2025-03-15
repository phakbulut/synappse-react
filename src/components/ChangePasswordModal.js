import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const ChangePasswordModal = ({ isOpen, toggleChangePasswordModal }) => {
  return (
    <Modal isOpen={isOpen}
      toggle={toggleChangePasswordModal}
      centered
      scrollable={false}
      size="lg"
      autoFocus={true} >
      <ModalHeader toggle={toggleChangePasswordModal}>Change Password</ModalHeader>
      <ModalBody className="d-flex flex-column align-items-center">
        <div className='mb-3 w-100 position-relative'>
          <FontAwesomeIcon icon={faLock} className="register-input-icon position-absolute" />
          <input type="password" placeholder="Type your password" className="register-input "  />
        </div>
        <div className='mb-3 w-100 position-relative'>
          <FontAwesomeIcon icon={faLock} className="register-input-icon position-absolute"  />
          <input type="password" placeholder="Again Type your password" className="register-input"  />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggleChangePasswordModal}>Change Password</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ChangePasswordModal;