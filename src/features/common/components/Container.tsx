import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  justify-content: center;
  color: black;
  padding: 50px;
  width: ${(props: { width?: number }) => props.width || 300}px;
`;
