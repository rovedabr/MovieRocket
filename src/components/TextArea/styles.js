import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 27.5rem;
  
  border-radius: 1rem;
  border: none;
  padding: 1.9rem 1.6rem;
  gap:.8rem;

  overflow-y: auto;
 
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT};

  ::placeholder {
    font-size: 1.6rem;
    color: #948F99;
  }
`;