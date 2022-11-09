const { default: styled } = require('styled-components');

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  width: calc((100% - 60px) / 4);
  background-color: lightblue;
`;

export const Img = styled.img`
  width: 100%;
  display: block;
`;

export const Name = styled.p`
  font-weight: 700;
  margin: 0px 0px 10px 0px;
`;

export const Character = styled.p`
  font-weight: 400;
  margin: 0;
`;
