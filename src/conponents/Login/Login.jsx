import React from "react"
import {Formik, Form, Field} from 'formik'
import { getLoginUser } from "../../state/authReducer"
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";
import s from './Login.module.css'


const LoginForm = (props) => {
	const submit = (values, { setSubmitting, resetForm, setErrors }) => {
		setTimeout(() => {
			props.loginUser(values.email, values.password, values.rememberMe, setErrors)
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
				validate={values => {
					const errors = {};
						if (!values.email) {
							errors.email = 'Required';
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
						) {
							errors.email = 'Invalid email address';
						}
						if (!values.password) {
							errors.password = 'Required';
						}
					return errors;
				}}
				onSubmit={submit}
     >
       {({
				values,
         errors,
         touched,
				 isSubmitting }) => (
         <Form>
					<div>
					<Field name='email' type='email' placeholder={'email'} value={values.email}/>
					<div className={errors.email && touched.email && errors.email ? s.error : '' }> {errors.email && touched.email && errors.email}</div>
					</div>
					<div>
					<Field name='password' type='password' placeholder={'password'}/>
					<div className={errors.password && touched.password && errors.password ? s.error : '' }> {errors.password && touched.password && errors.password}</div>
					</div>
					<div>
					<Field name='rememberMe' type='checkbox'/> Запомнить меня
					</div>
					<div>
					<button type='submit' disabled={isSubmitting}>
             Отправить
           </button>
					 <div className={errors.apiError ? s.error : '' }>{errors.apiError}</div>
					</div>
         </Form>
       )}
     </Formik>
		</div>
	)
}

const Login = (props) => {
	if(props.isAuth){
		return <Navigate to='/profile' />
	}
 return (
	<div>
		<h1>Login page</h1>
		<LoginForm loginUser={props.getLoginUser}/>
	</div>
 )
}

const useStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}

export default compose
(connect(useStateToProps, {getLoginUser}))
(Login)