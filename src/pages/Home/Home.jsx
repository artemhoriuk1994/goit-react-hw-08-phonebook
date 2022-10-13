import { useAuth } from "hooks";
import { Container, H1, P, Link } from "./Home.styled";

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <main>
      <Container>
        <H1>Welcome to the Phonebook</H1>
        {!isLoggedIn &&
          <P>
            Please <Link to="/register">register</Link> or
            <Link to="/login"> log in</Link> to access your contacts
          </P>
        }
      </Container>
    </main>
  );
};
