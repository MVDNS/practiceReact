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
						onSubmit={(values, { setSubmitting }) => {
							setTimeout(() => {
								props.SendNewMessage(values.textarea)
								setSubmitting(false);
							}, 1000);
						}}
						>
						{({ isSubmitting }) => (
						<Form>
							<Field 
								className={s.textarea}
								placeholder="Ваше сообщение..."
								name="textarea"
								component="textarea"
								rows="1"
								maxLength='100'
							/>
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
