import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: ${p => p.theme.space[4]}px;
`
export const H1 = styled.h1`
  margin: ${p => p.theme.space[5]}px 0;
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.primary};
  text-align: center;
  @media screen and (min-width: 375px) {
    font-size: ${p => p.theme.fontSizes.xxl};
  }
`
export const P = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.black};
  text-align: center;
`
export const Link = styled(NavLink)`
  color: ${p => p.theme.colors.primary};
  transition: color 300ms linear;
  :hover, :focus {
    color: ${p => p.theme.colors.secondary};
  }
`