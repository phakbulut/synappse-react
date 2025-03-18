import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import * as actions from '../../../redux/actions/MainActions'; // Dosya yolunu projene göre ayarla

const servers = [
  { id: 1, name: "Server 1", notifications: 5, online: true },
  { id: 2, name: "Server 2", notifications: 50, online: false }
];

const MiddleServers = () => {
  const dispatch = useDispatch();
  const { serversOpen, selectedServerId, usersOpen } = useSelector((state) => state);

  // Yerel state’ler (Redux’a taşınmayacak, yalnızca UI için)
  const [addServerModal, setAddServerModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(process.env.PUBLIC_URL + '/asset/images/server.png');

  const addservertoggle = () => setAddServerModal(!addServerModal);

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
              dispatch(actions.openServers(server.id));
              dispatch(actions.openUsers());
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
      {/* Yeni sunucu ekleme butonu */}
      <div className='left-bar-item-middle'>
        <div className='add-server-avatar'>
          <FontAwesomeIcon icon={faSquarePlus} onClick={addservertoggle} />
        </div>
      </div>
      <Modal isOpen={addServerModal} toggle={addservertoggle}>
        <ModalHeader className='add-server-modal-header' toggle={addservertoggle}>Sunucu Oluştur</ModalHeader>
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
              <Label for="serverName">Sunucu Adı</Label>
              <Input type="text" id="serverName" placeholder="Sunucu adını gir" />
            </FormGroup>
            <FormGroup className='d-flex flex-column justify-content-center align-items-center'>
              <Label for="serverType">Sunucu Türü</Label>
              <select name="serverType" id="serverType">
                <option value="1">Oyun</option>
                <option value="2">Geliştirme</option>
                <option value="3">Diğer</option>
              </select>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="" onClick={addservertoggle}>
            Sunucu Oluştur
          </Button>{' '}
          <Button color="" onClick={addservertoggle}>
            İptal
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default MiddleServers;