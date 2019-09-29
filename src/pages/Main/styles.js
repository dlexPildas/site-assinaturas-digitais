import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  max-width: 700px;
  margin: 80px auto;
  border: 0;
  border-radius: 30px;
  padding: 20px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  h1 {
    text-align: center;
    flex: 1;
    font-weight: bold;
    color: #333;
  }
`;
