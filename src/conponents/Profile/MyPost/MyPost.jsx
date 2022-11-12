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
						onSubmit={(values, { setSubmitting }) => {
							setTimeout(() => {
								props.postNewText(values.textarea)
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
								rows="4"
								maxLength='300'
							/>
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
