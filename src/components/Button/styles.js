import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;

  border: none;
  border-radius: .8rem;
  padding: 1.3rem 3.2rem;
  gap: .8rem;
  background-color: ${({theme}) => theme.COLORS.PINK_LIGHT};

  font-size: 1.6rem;
  line-height: 2.1rem;
  font-weight: 400;
  color: #1C1B1E;
`;