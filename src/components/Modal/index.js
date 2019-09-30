import React, { useState } from "react";

import ad from "../../assets/ass.png";

import { BotaoAssinaturaDigital, CampoAssinatura } from "./styles";

import { Button, Modal } from "react-bootstrap";

import CanvasDraw from 'react-canvas-draw'

export default function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let loadableCanvas = () => {}

  let assinatura = null;

  return (

    <>
      <BotaoAssinaturaDigital color="blue" variant="primary" onClick={handleShow}>
        <img src={ad} alt="Assinatura Digital" />
      </BotaoAssinaturaDigital>

      <Modal show={show} onHide={handleClose} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title>Faça a sua assinatura dentro do espaço pontilhado</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <CampoAssinatura>
          <CanvasDraw 
            ref={canvasDraw => loadableCanvas = canvasDraw }
            hideGrid={true}   
            canvasWidth='100%' 
            canvasHeight={100} 
            brushRadius={1} 
            brushColor='#000' 
            catenary={false}
            saveData={assinatura}
          />
          </CampoAssinatura>
          
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ () => loadableCanvas.undo()}>
            Desfazer
          </Button>
          <Button variant="secondary" onClick={ () => loadableCanvas.clear()}>
            Limpar tela
          </Button>
          <Button variant="primary" onClick={ () => {
            localStorage.setItem(
              "savedDrawing",loadableCanvas.getSaveData())
            }
          }>
            Assinar
          </Button>
          
          
        </Modal.Footer>
      </Modal>
    </>
  );
}
