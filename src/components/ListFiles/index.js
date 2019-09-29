import React from "react";

import { Container, Dados, Action } from "./styles";

import { FaFilePdf, FaFileDownload, FaTrashAlt } from "react-icons/fa";

export default function ListFiles({ files }) {
  console.log(files);

  return (
    <Container>
      {files.map(file => (
        <li>
          <Dados>
            <FaFilePdf size={30} />
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
          </Action>
        </li>
      ))}
    </Container>
  );
}
