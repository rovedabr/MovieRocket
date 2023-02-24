import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    width: 100%;
    height: 14.4rem;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    
    background-color: rgba(255, 133, 155, 0.05);
    
    > a button {
      display: flex;
      justify-content: flex-start;
      margin: 6.4rem auto 5.9rem 14.4rem;
    }
  }
`;

export const Form = styled.div`
  max-width: 34rem;
  margin: 15rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div:nth-child(3) {
    margin-top: 2.4rem;
  }

  > button{
    margin-top: 2.4rem;
    opacity: 0.5;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -100px auto;

  width: 18.6rem;
  height: 18.6rem;

  > img{
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;
    background-color: ${({theme}) =>theme.COLORS.PINK_LIGHT};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: .7rem;
    right: .7rem;
    
    input {
      display: none;
    }
    
    svg{
      width: 2rem;
      height: 2rem;
          
      color: #312E38;
    }
  }
`;
