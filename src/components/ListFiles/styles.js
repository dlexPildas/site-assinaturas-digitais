import styled from "styled-components";

export const Container = styled.ul`
  list-style: none;

  li {
    margin-top: 25px;
    flex: 1;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-radius: 5px;
    background: #f1f1f1;
  }
`;

export const Dados = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  div {
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    strong {
      font-size: 14px;
    }

    span {
      font-size: 15px;
      color: #aaa;
    }
  }
`;

export const Action = styled.div`
  button {
    margin: 5px;
    border: 0;
    background: transparent;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;
