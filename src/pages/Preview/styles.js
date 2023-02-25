import styled from "styled-components";
import starRating from "../../assets/stars.png"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

`;

export const StarRate = styled.div`
  width: 5rem;
`;

export const MovieData = styled.div`
  width: 39rem;
  height: 20rem;

  margin: 8.4rem auto 3rem 15.6rem;
  display: flex;
  flex-direction: column;

  overflow-y: auto;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    margin: 0 auto 2.4rem 0;  
  }
  
  .movie {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    margin: 0 1.6rem 1rem 0;
    gap: 1.9rem;

    h1 {
      font-size: 3.6rem;
      line-height: 4.7rem;
      font-weight:500;

      color: #F4EDE8;
    }

    p {
      font-size: 1.5rem;
    }

  }
  
  .user {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin: .3rem auto 2rem 0;


    img {
    width: 1.6rem;
    height: 1.6rem;
  
    border-radius: 50%;
    margin-right: .8rem;
    }

    span, strong {
      font-size: 1.6rem;
      line-height: 1.9rem;
      font-weight: 400;

      margin-right: 1rem;
    }
  }

  .tag p{
    width: 12rem;
    height: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    font-size: 1.2rem;

    background-color: #282124;
    padding: .8rem 1.6rem;
    border-radius: .8rem;
  }
`;

export const Form = styled.div`
  width: 113rem;
  height: 34rem;

  font-size: 1.2rem;
  color: #F4EDE8;
  line-height: 2.1rem;
  font-weight: 400;

  text-align: justify;
  overflow-y: auto;

  margin: 2.7rem auto auto 15.6rem;
`;