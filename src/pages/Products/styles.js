import { Box } from "@mui/material";
import '@fontsource/ubuntu/300.css';
import '@fontsource/ubuntu/500.css';
import styled from "styled-components";


export const View = styled(Box)`
  font-family: 'Ubuntu';
  ${({fontSize}) => fontSize ? `font-size: ${fontSize};` : 'font-size: 30px;' } 
  ${({bold}) => bold ? `font-weight: 500;` : 'font-weight: 300;' } 
  padding: 30px;
  display: flex;
  flex-direction:column;
  align-items: center;
`;