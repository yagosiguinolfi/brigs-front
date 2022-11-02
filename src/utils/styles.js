import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  ${({width}) => width ? `width:${width};` : 'width: 100%;'}   
  align-items: center;
  justify-content: center;
`;