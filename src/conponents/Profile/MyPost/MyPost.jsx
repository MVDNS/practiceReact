import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";
import { Formik, Form, Field} from 'formik';

const PostCreator = (props) => {
	return (
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
						onSubmit={(values, { setSubmitting, resetForm }) => {
							setTimeout(() => {
								props.postNewText(values.textarea)
								setSubmitting(false);
								resetForm();
							}, 1000);
						}}
						>
						{({
							values,
         			errors,
         			touched,
				  		isSubmitting }) => (
						<Form>
							<Field
								className={s.textarea}
								placeholder="Ваше сообщение..."
								name="textarea"
								component="textarea"
								rows="4"
								maxLength='300'
								validate={values.textarea}
							/>
							{errors.textarea && touched.textarea && errors.textarea}
							<button className={s.submit} type='submit' disabled={isSubmitting}>
								<span className={s.btnText}>Отправить</span>
							</button>
						</Form>

						)}
					</Formik>
	)
}

function MyPost(props) {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} like={p.likesCount} key={p.id} />
  ));
  return (
    <div className="">
      <div className={s.create}>
        <div className={s.title}>Новое сообщение</div>
				<div className={s.formwrap}>
					<PostCreator postNewText={props.addSendNewPost}/>
				</div>
      </div>
      {postsElement}
    </div>
  );
}

export default MyPost;
