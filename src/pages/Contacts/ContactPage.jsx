import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { FormAddContacts } from 'components/FormAddContacts/FormAddContacts';
import { Section } from 'components/Section/Section';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { ListContacts } from 'components/ListContacts/ListContacts';
import { FlexWrraper } from './ContactPage.styled';

export const Contacts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    const contacts = useSelector(selectContacts);
    return (
        <FlexWrraper>
            <FormAddContacts />
            <Section title="Contacts">
                {!!contacts.length ? (
                    <>
                        <SearchForm />
                        <ListContacts />
                    </>
                ) : (
                    <div>
                        <p>Add your first contact</p>
                    </div>
                )}
            </Section>
        </FlexWrraper>
    );
};
