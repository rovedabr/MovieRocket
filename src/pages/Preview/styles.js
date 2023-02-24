import styled from "styled-components";
import starRating from "../../assets/stars.png"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;  
`;

export const StarRate = styled.div`
  width: 5rem;
`;

export const MovieData = styled.div`
  width: 39rem;
  height: 20rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow-y: scroll;
  margin-left: 2rem;

  > img {
    width: 1.6rem;
    height: 1.6rem;

    border-radius: 50%;
    margin-right: .8rem;
  }
`;

export const Form = styled.div`
  width: 113rem;
  height: 34rem;

  font-size: 1.6rem;
  color: #F4EDE8;
  line-height: 2.1rem;
  font-weight: 400;

  text-align: justify;
  overflow-y: auto;

  margin: 2.7rem auto auto;
`;