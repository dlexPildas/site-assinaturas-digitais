import React from "react";

import { Container, Dados, Action } from "./styles";

import Modal from "../Modal/index";

import { FaRegFilePdf, FaFileDownload, FaTrashAlt } from "react-icons/fa";

export default function ListFiles({ files }) {
  return (
    <Container>
      {files.map(file => (
        <li key={file.lastModified}>
          <Dados>
            <FaRegFilePdf size={30} />
            <div>
              <strong>{file.name}</strong>
              <span>{file.size}</span>
            </div>
          </Dados>
          <Action>
            <button>
              <FaTrashAlt size={25} />
            </button>
            <button>
              <FaFileDownload size={25} />
            </button>
            <Modal file={file} />
          </Action>
        </li>
      ))}
    </Container>
  );
}
