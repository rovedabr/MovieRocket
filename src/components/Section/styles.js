import styled from "styled-components";
import stars from "../../assets/stars.png"

export const Container = styled.section`
  width: 100%;
  height: 23.4rem;

  padding: 3.2rem;
  border-radius: 1.6rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > h2{
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 700;

    margin-bottom: 3.5rem;
  }  

  > p{
    font-size: 1.6rem;
    line-height: 1.8rem;
    font-weight:400;

    text-align: justify;
    text-overflow: clip;
  }
`;

export const StarsRate = styled.div`
  width: 2rem;
  height: 2rem;
  background: url(${stars}) no-repeat center center;
`

