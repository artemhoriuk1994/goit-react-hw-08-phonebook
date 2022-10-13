import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import { Btn } from "../Button/Button";
import { Container, FormStyled, LableStyled, InputStyled, H2 } from "./RegisterForm.styled";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <H2>Registration</H2>
      <FormStyled onSubmit={handleSubmit} autoComplete="off">
        <LableStyled>
          Username
          <InputStyled type="text" name="name" />
        </LableStyled>
        <LableStyled>
          Email
          <InputStyled type="email" name="email" />
        </LableStyled>
        <LableStyled>
          Password
          <InputStyled type="password" name="password" />
        </LableStyled>
        <Btn type="submit" name="register">Register</Btn>
      </FormStyled>
    </Container>
  );
};