import { Formik, ErrorMessage } from 'formik';
import Notiflix from 'notiflix';
import * as Yup from 'yup';
import 'yup-phone';
import { Form, Field, Button } from './FormAddContacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

const initialValues = {
    name: '',
    number: '',
};
export function FormAddContacts() {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const validationSchema = Yup.object({
        name: Yup.string().required().max(40).trim(),
        number: Yup.string().phone('UA', true).required(),
    });

    const handleSubmit = (values, actions) => {
        setTimeout(() => actions.setSubmitting(false), 500);
        const { name, number } = values;
        const newContact = {
            name,
            number,
        };
        contacts.find(
            contact =>
                contact.name.toLowerCase() === newContact.name.toLowerCase()
        )
            ? Notiflix.Notify.failure(
                  `${newContact.name} is already in contacts.`
              )
            : dispatch(addContact(newContact));

        actions.resetForm();
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => {
                return (
                    <Form>
                        <label>
                            <span>Name</span>
                            <Field name="name"  />
                            <ErrorMessage name="name" component="div" />
                        </label>
                        <label>
                            <span>Phone Number</span>
                            <Field
                                name="number"
                               
                            />
                            <ErrorMessage name="phoneNumber" component="div" />
                        </label>
                        <Button type="submit" disabled={isSubmitting}>
                            Add contact{' '}
                        </Button>
                    </Form>
                );
            }}
        </Formik>
    );
}
