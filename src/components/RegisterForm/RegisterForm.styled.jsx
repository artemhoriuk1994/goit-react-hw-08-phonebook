import styled from "@emotion/styled";

export const Container = styled.div`
  width: 312px;
  margin: ${p => p.theme.space[5]}px auto;
  padding: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16), 0 1px 2px rgba(0, 0, 0, 0.23);
`
export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
`
export const LableStyled = styled.label`
  display: flex;
  flex-direction: column;
`
export const InputStyled = styled.input`
  margin-top: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.s};
  border: ${p => p.theme.borders.none};
  outline: none;
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: box-shadow 300ms linear;

:hover,
:focus{
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
`
export const H2 = styled.h2`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.primary};
  margin-bottom: ${p => p.theme.space[4]}px;
`