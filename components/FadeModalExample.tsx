"use client";

import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function FadeModalExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container mt-4">
      <Button variant="primary" onClick={handleShow}>
        Apri Modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={true} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal di esempio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Questo è un contenuto di esempio all’interno del Modal con fade.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salva modifiche
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
