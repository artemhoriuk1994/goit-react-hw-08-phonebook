import styled from "@emotion/styled";

export const Header = styled.header`
  padding: ${p => p.theme.space[4]}px;
  border-bottom: 1px solid ${p => p.theme.colors.primary};
`
export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  @media screen and (min-width: 375px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`