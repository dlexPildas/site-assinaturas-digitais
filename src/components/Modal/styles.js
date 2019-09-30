import styled from "styled-components";

export const BotaoAssinaturaDigital = styled.button`
  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
    border-radius: 5px;
  }

  &:hover {
    color: blue;
  }
`;

export const CampoAssinatura = styled.div`
  border: 2px dashed #000;
`;
