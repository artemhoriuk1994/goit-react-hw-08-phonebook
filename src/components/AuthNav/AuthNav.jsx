import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { Box } from "../box";

const Link = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.primary};
`
export const AuthNav = () => {
  return (
    <Box as="div" display="flex" gridGap="16px" justifyContent="end">
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </Box>
  );
};