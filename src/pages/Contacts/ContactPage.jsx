import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { FormAddContacts } from 'components/FormAddContacts/FormAddContacts';
import { Section } from 'components/Section/Section';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { ListContacts } from 'components/ListContacts/ListContacts';

export const Contacts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    const contacts = useSelector(selectContacts);
    return (
        <div>
            <FormAddContacts />
            <Section title="Contacts">
                {!!contacts.length ? (
                    <>
                        <SearchForm />
                        <ListContacts />
                    </>
                ) : (
                    <p>Add your first contact</p>
                )}
            </Section>
        </div>
    );
};
