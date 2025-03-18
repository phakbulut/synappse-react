import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';


const servers = [
  { id: 1, name: "Server 1", notifications: 5, online: true },
  { id: 2, name: "Server 2", notifications: 50, online: false }
];
const Middle = ({ handleServersOpen, serversOpen, selectedServerId, handleUsersOpen, handleCloseUsers, usersOpen }) => {

  const [addServerModal, setAddServerModal] = useState(false);
  const addservertoggle = () => setAddServerModal(!addServerModal);
  const [selectedImage, setSelectedImage] = useState(process.env.PUBLIC_URL + '/asset/images/server.png');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (

    <div className='left-bar-middle'>
      {servers.map(server => (
        <div className='left-bar-item-middle' key={server.id}>
          <div
            className={`server-avatar ${server.online ? 'online' : ''} ${selectedServerId === server.id ? 'current-server' : ''}`}
            onClick={() => {
              handleServersOpen(server.id);
              handleUsersOpen();
            }}
            
          >
            <p className='notification-count'>{server.notifications}</p>
            <img
              src={process.env.PUBLIC_URL + '/asset/images/server.png'}
              alt={server.name}
              className='server-avatar-img'
            />
          </div>
        </div>
      ))}
      {/* yeni server ekleme butonu */}
      <div className='left-bar-item-middle '>
        <div className='add-server-avatar'>
          <FontAwesomeIcon icon={faSquarePlus} onClick={addservertoggle} />
        </div>
      </div>
      <Modal isOpen={addServerModal} toggle={addservertoggle} >
        <ModalHeader className='add-server-modal-header' toggle={addservertoggle}>Create Server</ModalHeader>
        <ModalBody className='add-server-modal-body d-flex flex-column justify-content-center align-items-center'>
          <Form>
            <FormGroup className='d-flex flex-column justify-content-center align-items-center'>
              <Label for="add-server-avatar" className='server-avatar-upload'>
                <img src={selectedImage} alt="server" className="preview-image" />
                <div className="upload-overlay">
                  <span>Resim Seç</span>
                </div>
              </Label>
              <input 
                type="file" 
                id="add-server-avatar" 
                className="hidden-input" 
                onChange={handleImageChange}
                accept="image/*"
              />
            </FormGroup>
            <FormGroup>
              <Label for="serverName">Server Name</Label>
              <Input type="text" id="serverName" placeholder="Enter server name" />
            </FormGroup>
            <FormGroup className='d-flex flex-column justify-content-center align-items-center'>
              <Label for="serverName">Server Type</Label>
              <select name="serverName" id="serverName">
                <option value="1">Games</option>
                <option value="2">Development</option>
                <option value="3">Other</option>
              </select>
            </FormGroup>
            
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="" onClick={addservertoggle}>
          Create Server
          </Button>{' '}
          <Button color="" onClick={addservertoggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Middle;