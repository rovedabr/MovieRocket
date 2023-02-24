import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 5.6rem;

display: flex;
flex-direction: row;
align-items: center;
border-radius: 1rem;
padding: 0 1rem;
border: none;
background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT};
margin-top: 1rem;


> input {
  width: 100%;
  background: transparent;
  color: white;
  border: none;
  font-size: 1.6rem;

  ::placeholder {
    color: #948F99;
    font-size: 1.6rem;
  }
}

> svg {
  margin: 1.8rem 1.6rem 1.8rem 1.6rem;
}
`;