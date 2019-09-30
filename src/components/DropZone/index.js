import React from "react";

import Dropzone from "react-dropzone";

import { Container } from "./styles";

export default function DropZone({ addFile, message }) {
  return (
    <Dropzone accept="application/pdf" onDrop={addFile}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <Container isDragActive={isDragActive} isDragReject={isDragReject}>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <span>{message(isDragActive, isDragReject)}</span>
          </div>
        </Container>
      )}
    </Dropzone>
  );
}
