import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding: 0px;
  margin: 0px;
`;

export const Item = styled.li`
  background-color: lightskyblue;
`;

export const Poster = styled.img`
  width: 100%;
  display: block;
`;
