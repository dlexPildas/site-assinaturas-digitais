import styled, { css } from "styled-components";

const dragActive = css`
  border-color: #78e5d5;

  color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;

  color: #e57878;
`;

export const Container = styled.div.attrs({})`
  border: 2px dashed #aaa;

  ${props => props.isDragActive && dragActive}
  ${props => props.isDragReject && dragReject}

  div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    span {
      padding: 20px;
      font-weight: bold;
    }
  }
`;
