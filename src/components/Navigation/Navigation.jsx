import { NavLink } from "react-router-dom";
import { useAuth } from "hooks";
import styled from "@emotion/styled";
import { Box } from "../box";

const Link = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.primary};
`

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box as="nav" display="flex" gridGap="16px">
      <Link to="/">Home</Link>
      {isLoggedIn && (<Link to="/contacts">Contacts</Link>)}
    </Box>
  );
};