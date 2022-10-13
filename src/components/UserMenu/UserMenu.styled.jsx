import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[4]}px;
  @media screen and (min-width: 375px) {
    margin-top: 0;
  }
`
export const Username = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  
`
