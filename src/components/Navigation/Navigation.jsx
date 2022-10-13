import { NavLink } from "react-router-dom";
import { useAuth } from "hooks";
import styled from "@emotion/styled";
import { Box } from "../box";

const Link = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.primary};
  &.active {
    color: ${p => p.theme.colors.secondary};
  }
`

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box as="nav" display="flex" gridGap="16px">
      <Link to="/" end>Home</Link>
      {isLoggedIn && (<Link to="/contacts">Contacts</Link>)}
    </Box>
  );
};