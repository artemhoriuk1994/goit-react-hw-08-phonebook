import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { Btn } from "../Button/Button";
import { Container, FormStyled, LableStyled, InputStyled } from "./LoginForm.styled";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <FormStyled onSubmit={handleSubmit} autoComplete="off">
        <LableStyled>
          Email
          <InputStyled type="email" name="email" />
        </LableStyled>
        <LableStyled>
          Password
          <InputStyled type="password" name="password" />
        </LableStyled>
        <Btn type="submit" name="Login">Log in</Btn>
      </FormStyled>
    </Container>
  );
};