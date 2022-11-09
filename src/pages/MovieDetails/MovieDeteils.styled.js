import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Poster = styled.img`
  display: block;
`;

export const Title = styled.h2`
  margin: 0 0 10px 0;
`;

export const SecondaryTitle = styled.h3`
  margin: 0 0 10px 0;
`;

export const Text = styled.p`
  margin: 0 0 40px 0;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 0 0;
  display: flex;
  gap: 20px;
`;

export const Item = styled.li`
  width: calc((100% - 20px) / 2);
  text-align: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  width: 100%;
  background-color: skyblue;
  color: black;
  border: 1px solid black;
`;
