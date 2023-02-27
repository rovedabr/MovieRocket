import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 13.6rem auto auto;
  grid-template-areas: 
    "header"
    "menu"
    "content";

`;

export const Menu = styled.div`
  grid-area: menu;
  height: 13.2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5rem 12.3rem 4rem 12.3rem;

  > h1 {
    font-size: 3.2rem;
    font-weight:400;
    line-height: 4.2rem;

    color: #FFFFFF;
  }

  > button {
    width: 20.7rem;
  } 
`;

export const Content = styled.div`
  grid-area: content;
  height: 50rem;
  overflow-y: auto;

  margin: 4rem 13.2rem;
  padding: 3.2rem;
  background: transparent;

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar {
  background-color: transparent;
  width: .8rem;
}

::-webkit-scrollbar-thumb {
  background-color: ${({theme}) => theme.COLORS.PINK_LIGHT};
  width: .8rem;
  height: 9rem;
  border-radius: .8rem;
}
`; 

export const Notes = styled.div`
  display: grid;
  grid-area: notes;
  grid-template-areas: 
    "notes"
    "input";

  width: 100%;
  height: 22.3rem;

  border-radius: 1.6rem;
 
  margin-bottom: 2.4rem;
  background-color: rgba(255, 133, 155, 0.05);

`;

