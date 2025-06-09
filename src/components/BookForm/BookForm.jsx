import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import RegularButton from '../Button/RegularButton.jsx';
import css from './BookForm.module.css';

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Name is too short')
        .max(50, 'Name is too long')
        .required('Name is required'),
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    date: Yup.date()
        .required("Date is required"),
    comment: Yup.string()
        .min(3, 'Comment is too short')
        .max(150, 'Comment is too long')
});

export default function BookForm() {
    const nameFieldId = useId();
    const emailFieldId = useId();
    const dateFieldId = useId();
    const commentFieldId = useId();

    const handleSubmit = (values, actions) => {
        toast.success('You have successfully booked your campervan!');
        actions.resetForm();
    };

    return (
        <div className={css.container}>
            <h3 className={css.title}>Book your campervan now</h3>
            <p className={css.subTitle}>Stay connected! We are always ready to help you.</p>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    date: '',
                    comment: '',
                }}
                onSubmit={handleSubmit}
                validationSchema={ContactSchema}
            >
                <Form className={css.form}>
                    <div className={css.fieldContainer}>
                        <Field
                            type="text"
                            id={nameFieldId}
                            name="name"
                            placeholder="Name*"
                        />
                        <ErrorMessage
                            className={css.error}
                            name="name"
                            component="span"
                        />
                    </div>
                    <div className={css.fieldContainer}>
                        <Field
                            type="email"
                            id={emailFieldId}
                            name="email"
                            placeholder="Email*"
                        />
                        <ErrorMessage
                            className={css.error}
                            name="email"
                            component="span"
                        />
                    </div>
                    <div className={css.fieldContainer}>
                        <Field
                            type="date"
                            id={dateFieldId}
                            name="date"
                            placeholder="Booking date*"
                        />
                        <ErrorMessage
                            className={css.error}
                            name="date"
                            component="span"
                        />
                    </div>
                    <div className={css.fieldContainer}>
                        <Field
                            as="textarea"
                            id={commentFieldId}
                            name="comment"
                            placeholder="Comment"
                        />
                        <ErrorMessage
                            className={css.error}
                            name="comment"
                            component="span"
                        />
                    </div>
                    <RegularButton type="submit">
                        Send
                    </RegularButton>
                </Form>
            </Formik>
            <Toaster />
        </div>
    );
}