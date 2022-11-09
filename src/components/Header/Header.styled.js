import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.space[3]}px;
  padding: ${props => props.theme.space[3]}px;
  border-radius: 4px;
  text-decoration: none;
  color: ${props => props.theme.colors.text};

  &.active {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${props => props.theme.colors.primary};
  }
`;
