import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: 2.4rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;

  
  /* background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_INPUT};  */
 
background-color: red;

  border-radius: .8rem;
  padding: .5rem 1.6rem;
  gap: .8rem;

  z-index: -1;

  > input {
    width: 5rem;
    border: none;
    background-color: transparent;
  }
  
  > svg  {
    fill: #FF859B;
  } 

`;