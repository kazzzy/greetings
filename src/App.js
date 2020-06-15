import React, {useState} from 'react';
import './App.css';
import {Modal, Button, Jumbotron, FormControl} from "react-bootstrap";

function App() {
  const [name, setName] = useState('anonym');

  const [show, setOpened] = useState(false);
  const handleClose = () => setOpened(false);
  const handleOpen = () => setOpened(true);

  return (
    <div className="App">
      <Jumbotron>
        <h1>
          Hello, <span>{name}</span>!
        </h1>
        <Button variant="primary" onClick={handleOpen}>Enter name</Button>
      </Jumbotron>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please, enter your name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Dmitry K."
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Ok!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
