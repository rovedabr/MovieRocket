import styled from "styled-components";
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
  display: flex;
  align-items: stretch;

`;

export const Form = styled.form`
  width: 63.7rem;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 23.5rem;
  

  > h1 {
    font-size: 4.8rem;
    line-height:6.3rem;
    font-weight: 700;

    color: ${({theme}) => theme.COLORS.PINK_LIGHT};
  }

  > p {
    font-size: 1.4rem;
    line-height: 1.8rem ;
    font-weight: 400;
    color: #CAC4CF;

    margin: 0 auto;
  }

  > span {
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 500;
  
    margin: 4.8rem auto 4.8rem 16rem;
  }

  > div {
    width: 34rem;
    margin-bottom: .8rem;
    color: white;
    border: none;
  }

  > a{
    margin-top: 2.4rem;
  }

  ::placeholder {
    color: #CAC4CF;
  }

  > button {
    width: 35.5rem;
    margin-top: 2.4rem;
    border: none;
  }
`;

export const Background = styled.div`
  flex: 1;

  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.5;
  background-size: 100% 100%;
`;