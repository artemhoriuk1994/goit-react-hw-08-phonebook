import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { useAuth } from "hooks";
import { Btn } from "../Button/Button"
import { Wrapper, Username } from "./UserMenu.styled";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <Btn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Btn>
    </Wrapper>
  );
};