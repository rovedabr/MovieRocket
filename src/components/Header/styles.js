import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 11.6rem;

  background-color: #1C1B1E;

  display: flex;
  flex-direction: row;
  align-items: center;
  /* position: fixed; */
  justify-content: space-between;

  border-bottom: 1px solid #3E3B47;

  > h1 {
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 700;

    margin: 4.2rem 6.4rem 4.2rem 12.3rem;

    color: ${({theme}) => theme.COLORS.PINK_LIGHT};
  }

  > input {
    width: 63rem;
    height: 5.6rem;

    border: none;
    border-radius: 1rem;
    padding: 1.9rem 2.4rem;
    color: white;
    background-color: #262529;
  }

  > div {
    display: flex;
    align-items: center;
    margin: 2.4rem 12.3rem 2.4rem 6.4rem;
  }

  >div #name {
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-right: .9rem;

    font-size: 1.4rem;
    line-height: 1.8rem;
    font-weight: 700;

    color: #F4EDE8;
  }

  > div #name a {

    font-size: 1.4rem;
    line-height: 1.8rem;
    font-weight: 400;
    color: #948F99;
  }

  > div img {
    width: 6.4rem;
    height: 6.4rem;

    border-radius: 50%;
  }
`;