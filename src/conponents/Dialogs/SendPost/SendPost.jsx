import React from "react";
import s from "./SendPost.module.css";
import { Form, Formik, Field } from "formik";

const SendPost = (props) => {
  return (
    <div className={s.send}>
      <div className={s.title}>Новое сообщение</div>
      <div className={s.block}>
			<Formik
						initialValues={{
							textarea: '',
							}}
							validate={values => {
								const errors = {};
									if (!values.textarea) {
										errors.textarea = 'Поле не должно быть пустым!';
									} else if (values.textarea.length > 50) {
										errors.textarea = 'Максимальное число символоов 50!';
									}
								return errors;
							}}
						onSubmit={(values, { setSubmitting, resetForm}) => {
							setTimeout(() => {
								props.SendNewMessage(values.textarea)
								setSubmitting(false);
								resetForm();
							}, 1000);
						}}
						>
						{({ values,
         			errors,
         			touched,
				  		isSubmitting }) => (
						<Form>
							<Field 
								className={s.textarea}
								placeholder="Ваше сообщение..."
								name="textarea"
								component="textarea"
								rows="1"
								maxLength='100'
								validate={values.textarea}
							/>
							{errors.textarea && touched.textarea && errors.textarea}
							<button className={s.submit} type='submit' disabled={isSubmitting}>
								<span className={s.btnText}>Отправить</span>
							</button>
						</Form>
						)}
					</Formik>
      </div>
    </div>
  );
}

export default SendPost;
