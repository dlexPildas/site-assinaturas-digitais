import React, { Component } from "react";

import { GeralContainer } from "../../components/Container";

import { Container, Title } from "./styles";

import { FaFilePdf } from "react-icons/fa";

import DropZone from "../../components/DropZone";

import ListFiles from "../../components/ListFiles/index";

export default class Main extends Component {
  state = {
    files: []
  };

  handleAddFile = file => {
    this.setState({
      files: this.state.files.concat(file)
    });
  };

  message = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return "Arraste aqui os arquivos...";
    }

    if (isDragReject) {
      return "Arquivo(s) não suportado(s)";
    }

    return "Solte o(s) arquivo(s) aqui";
  };

  render() {
    const { files } = this.state;
    return (
      <GeralContainer>
        <Container>
          <Title>
            <h1>Assinatura digital</h1>
            <FaFilePdf size={36} />
          </Title>
          <DropZone message={this.message} addFile={this.handleAddFile} />
          <ListFiles files={files} />
        </Container>
      </GeralContainer>
    );
  }
}
