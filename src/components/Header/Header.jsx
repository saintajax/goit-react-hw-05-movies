import { Box } from 'components/Box/Box';
import { Nav, StyledNavLink } from './Header.styled';

export const Header = () => {
  return (
    <Box
      as="header"
      width="100%"
      height="60px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderBottom="2px solid black"
    >
      <Nav>
        <StyledNavLink to="/home">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </Nav>
    </Box>
  );
};
