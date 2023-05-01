import "./Subscription.scss";
import Tel from "../../images/tel.png";
import { Formik } from 'formik';
import * as Yup from 'yup';

function Subscription() {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    return (
        <section className='subscription'>
            <div className='container'>
                <div className='subscription-container'>
                    <img src={Tel} alt='tel' className='subscription-tel'/>
                    <div className='subscription-form'>
                        <p className='subscription-title'>оформіть підписку на INTEFRA</p>
                        <Formik
                            initialValues={{ name: '', telephone: '', email: ''}}
                            validationSchema={Yup.object({
                                name: Yup.string()
                                    .min(4, 'Ім\'я має містити мінімум 4 символи')
                                    .required('Заповніть будьласка це поле'),
                                telephone: Yup.string().matches(phoneRegExp, 'Перевір формат номеру телефону')
                                    .required('Заповніть будьласка це поле'),
                                email: Yup.string().email('Неправильна адресса електронної пошти').required('Заповніть будьласка це поле'),
                            })}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(`Дякуємо! Наш запит надіслано успішно`);
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {formik => (
                                <form onSubmit={formik.handleSubmit}>
                                    <div className='form-first-row'>
                                        <label htmlFor="name">
                                            <input
                                                placeholder="Ім'я та прізвище"
                                                className="name input"
                                                id="name"
                                                type="text"
                                                {...formik.getFieldProps('name')}
                                            />
                                            {formik.touched.name && formik.errors.name ? (
                                                <div className="error">{formik.errors.name}</div>
                                            ) : null}
                                        </label>
                                        <label htmlFor="email">
                                            <input
                                                placeholder="Email"
                                                className="email input"
                                                id="email"
                                                type="email" {...formik.getFieldProps('email')} />
                                            {formik.touched.email && formik.errors.email ? (
                                                <div className="error">{formik.errors.email}</div>
                                            ) : null}
                                        </label>
                                    </div>

                                    <label htmlFor="telephone">
                                        <input
                                            placeholder="Телефон:"
                                            className="telephone input"
                                            id="telephone"
                                            type="tel"
                                            {...formik.getFieldProps('telephone')}
                                        />
                                        {formik.touched.telephone && formik.errors.telephone ? (
                                            <div className="error">{formik.errors.telephone}</div>
                                        ) : null}
                                    </label>
                                    <button className="button" type="submit">Оформити підписку</button>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>


            </div>

        </section>
    )
}
export default Subscription;