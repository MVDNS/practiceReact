import React from "react"
import {Formik, Form, Field} from 'formik'
import { getLoginUser } from "../../state/authReducer"
import { compose } from 'redux';
import { connect } from 'react-redux';

const LoginForm = (props) => {

	const submit = (values, { setSubmitting, resetForm }) => {
		setTimeout(() => {
			
			props.loginUser(values)
			setSubmitting(false);
			resetForm();
		}, 0);
	}
	return (
		<div>
			<Formik
       initialValues={{ 
				email: '', 
				password: '', 
				rememberMe: false }}
				onSubmit={submit}
     >
       {({ isSubmitting }) => (
         <Form>
					<div>
					<Field name='email' type='email' placeholder={'email'}/>
					</div>
					<div>
					<Field name='password' type='password' placeholder={'password'}/>
					</div>
					<div>
					<Field name='rememberMe' type='checkbox'/> Запомнить меня
					</div>
					<div>
					<button type='submit' disabled={isSubmitting}>
             Отправить
           </button>
					</div>
         </Form>
       )}
     </Formik>
		</div>
	)
}

const Login = (props) => {
 return (
	<div>
		<h1>Login page</h1>
		<LoginForm loginUser={props.getLoginUser}/>
	</div>
 )
}

const useStateToProps = (state) => {
	return {

	}
}

export default compose
(connect(useStateToProps, {getLoginUser}))
(Login)