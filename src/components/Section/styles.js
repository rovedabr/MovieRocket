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
    margin-top: -1rem;
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 700;

    margin-bottom: 1rem;
  }  

  > p {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight:400;

    text-align: justify;
    word-wrap: normal;
    text-overflow: clip;
  }
  
  > span{
    margin-bottom: .5rem;
    
  }

  > strong {
    background-color: #312E38;
    border-radius: .8rem;
    padding: 0.5rem 1.6rem;
    margin-top: .8rem;
  }
  
`;

export const StarsRate = styled.div`
  width: 2rem;
  height: 2rem;
  background: url(${stars}) no-repeat center center;
`

