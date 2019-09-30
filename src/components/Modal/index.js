import React, { useState } from "react";

import ad from "../../assets/ass.png";

import { AssinaturaDigital } from "./styles";

import { Button, Modal } from "react-bootstrap";

export default function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <AssinaturaDigital color="blue" variant="primary" onClick={handleShow}>
        <img src={ad} alt="Assinatura Digital" />
      </AssinaturaDigital>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Assinatura digital</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
