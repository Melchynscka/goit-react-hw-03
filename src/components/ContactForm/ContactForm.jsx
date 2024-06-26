import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useId } from "react";

import css from "./ContactForm.module.css";


export default function ContactForm({ onAddContact }) {
    const contactNameId = useId();
    const contactNumberId = useId();

    const handleSubmit = (values, actions) => {
		const newContact = {
      id: contactNameId,
      name: values.name,
      number: values.number,
    };
    onAddContact(newContact);
    actions.resetForm();
	};
   
     const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });


    return (
        <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
            <Form className={css.formWrapper}>
                <div className={css.formInner}>
                <label htmlFor={contactNameId}>Name</label>
                    <Field className={css.formInput} name="name" placeholder="John Doe"
            id={contactNameId} />
                    <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="div"
          />
</div>
        <div className={css.formInner}>
          <label htmlFor={contactNumberId}>Number</label>
          <Field
            className={css.formInput}
            type="tel"
            name="number"
            id={contactNumberId}
            placeholder="111-22-33"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          />
          <ErrorMessage name="number" component="div" />
        </div>
				<button type="submit" className={css.formBtn}>Add contact</button>
			</Form>
    </Formik>
    );
}

