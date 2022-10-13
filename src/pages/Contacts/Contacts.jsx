import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectIsLoading, selectContacts } from 'redux/contacts/selectors';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Section, Container, H1, H2, InfoMessage } from "./Contacts.styled";
import { BiInfoCircle } from "react-icons/bi";

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section>
        <Container>
          <H1>Phonebook</H1>
          <ContactsForm />
        </Container>
      </Section>
      <Section>
        <Container>
          {isLoading && <b>Waiting for response...</b>}
          <H2>Contacts</H2>
          <Filter />
          {contacts.length > 0
            ? <ContactsList/>
            : (<InfoMessage><BiInfoCircle />There are no contacts yet</InfoMessage>)
          }
        </Container>  
      </Section>
    </>
  );
}