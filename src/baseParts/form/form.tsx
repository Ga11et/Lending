import { Field, Form, Formik } from "formik";
import { FC } from "react";
import { MyButton } from "../../components/Button";
import css from './form.module.css'
import pic1 from '../../assets/tw.png'
import pic2 from '../../assets/fb.png'
import pic3 from '../../assets/p.png'
import pic4 from '../../assets/google.png'
import pic5 from '../../assets/mail.png'

export const ContactForm: FC<{}> = (props) => {
    return <section className={css.main}>
        <div className={css.container}>
            <div className={css.leftDiv}>
                <h2>Contact with us</h2>
                <p className={css.address}>Marszalkowska Street 14/35 / Mazowieckie, Poland</p>
                <p className={css.contactInfo}>Phone: <span>(+48) 604 234 091</span></p>
                <p className={css.contactInfo}>E-mail: <span>contact@austera.co</span></p>
                <div className={css.circles}>
                    <img src={pic1} />
                    <img src={pic2} />
                    <img src={pic3} />
                    <img src={pic4} />
                    <img src={pic5} />
                </div>
            </div>
            <Formik 
                initialValues={{ name: '', email: '', message: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    alert(JSON.stringify(values));
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className={css.rightDiv}>
                        <Field component='input' type='text' name='name' placeholder='Your Name' />
                        <Field component='input' type='email' name='email' placeholder='Your e-mail address' />
                        <Field component='textarea' name='message' placeholder='Your message' />
                        <button type="submit"><MyButton type="normal" text="Send message" /></button>
                    </Form>
                )}
            </Formik>
        </div>
    </section>
}