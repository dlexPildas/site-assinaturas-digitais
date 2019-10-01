import React, { useState } from "react";
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit';


import ad from "../../assets/ass.png";

import { BotaoAssinaturaDigital, CampoAssinatura } from "./styles";

import { Button, Modal } from "react-bootstrap";

import CanvasDraw from 'react-canvas-draw'

export default function Example({file}) {
  const [show, setShow] = useState(false);

  let pdfEditado = null;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let loadableCanvas = () => {}

  const convertFile = () =>  {
    fetch(file)
      .then(function(response) {
        let reader = response.body.getReader();
        reader.read().then(function(data){
          editPdf(data)
          
        });
      })
      
  }

  const editPdf = async file => {
    
    console.log(file.value);
    
    /* const existingPdfBytes = file.value
    const pdfDoc = await PDFDocument.load(existingPdfBytes)
    console.log(existingPdfBytes);
    
    
    .
    .
    .
    continua
    

    */
    
    
  }

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
          <Button variant="primary" onClick={ () => convertFile()
          // {
          //   localStorage.setItem(
          //     "savedDrawing",loadableCanvas.getSaveData())
          //   }
          }>
            Assinar
          </Button>
          
          
        </Modal.Footer>
      </Modal>
    </>
  );
}
