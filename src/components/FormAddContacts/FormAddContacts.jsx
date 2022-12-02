import { Formik, ErrorMessage } from 'formik';
import Notiflix from 'notiflix';
import * as Yup from 'yup';
import 'yup-phone';
import { Form, Field, Button } from './FormAddContacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { MdGroupAdd } from 'react-icons/md';

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
console.log(values);
        const { name, number } = values;
       
        contacts.find(
            contact =>
                contact.name.toLowerCase() === name.toLowerCase()
        )
            ? Notiflix.Notify.failure(
                  `${name} is already in contacts.`
              )
            : dispatch(addContact({ name:name, number:number }));

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
                            <Field name="name" />
                            <ErrorMessage name="name" component="div" />
                        </label>
                        <label>
                            <span>Phone Number</span>
                            <Field name="number" />
                            <ErrorMessage name="number" component="div" />
                        </label>
                        <Button type="submit" disabled={isSubmitting}>
                            <span>Add contact</span> <MdGroupAdd />
                        </Button>
                    </Form>
                );
            }}
        </Formik>
    );
}
