import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  font-size: 1.6rem;
  line-height: 2.1rem;
  font-weight: 400;

  color: ${({theme}) =>theme.COLORS.PINK_LIGHT};

  cursor: pointer;
  border: none;
  background: transparent;
`;