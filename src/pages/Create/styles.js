import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  
  `;

export const Form = styled.form`
  width:113.7rem;
  height: 78.3rem;

  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 3.9rem auto 8.6rem auto;

  padding: 0 2.4rem 1.6rem 0;
  overflow-y: scroll;
  border: 1px red solid;

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

  > button {
    margin: 0;
    align-items: flex-start;
    justify-content: flex-start;
  }

  > h1 {
    font-size: 3.6rem;
    line-height: 4.5rem;
    font-weight: 500;
    color: #F4EDE8;

    margin-top: 2.4rem;
  }
`

export const DataMovie = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  margin: 4rem 0 4rem 0;

  > input{
    width: 54rem;
  }
`;

export const  TextSection = styled.div`
  width: 100%;
  height: 27.4rem;

  border-radius: 1rem;
  border: none;
  padding: 1.9rem 1.6rem;
  gap:.8rem;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT};

  ::placeholder {
    color: white;
  }
`;

export const Marker = styled.div`
  width: 100%;
  height: 13.8rem;

  > h1{
    font-size: 2rem;
    line-height: 2.6rem;
    font-weight:400;
    color: #999591;
    margin: 4rem auto 2.4rem auto;
  }
`;

export const DeleteButton = styled.button`
  width: 56rem;
  height: 5.6rem;

  padding: 1.6rem 2.5rem;
  border: none;
  border-radius: 1rem;
  background-color: #0D0C0F;

  color: ${({theme}) => theme.COLORS.PINK_LIGHT};
  font-size: 1.6rem;
  line-height: 2.1rem;
  font-weight: 500;

`

export const ButtonArea = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > button{
    width: 54rem;
  }
`