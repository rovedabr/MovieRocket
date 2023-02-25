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

  a {
    display: flex;
    flex-direction: row;
 
    justify-content: flex-start;

    margin-bottom: 2.4rem;
  
  }

  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow-y: scroll; */
  
  border: 1px red solid;

  .movie {
    display: flex;
    flex-direction: row;
    align-items: center;

    h1 {
      font-size: 3.6rem;
      line-height: 4.7rem;
      font-weight:500;

      color: #F4EDE8;
    }

  }
  
  .user {
    display: flex;

    img {
    width: 1.6rem;
    height: 1.6rem;
  
    border-radius: 50%;
    margin-right: .8rem;
    }
  }


  > 
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