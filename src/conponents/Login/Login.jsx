import React from "react"
import {Formik, Form, Field} from 'formik'
import { getLoginUser } from "../../state/authReducer"

const LoginForm = (props) => {

	const submit = (values, { setSubmitting }) => {
		setTimeout(() => {
			props.getLoginUser(JSON.stringify(values))
			alert(JSON.stringify(values))
			setSubmitting(false);
		}, 400);
	}



	return (
		<div>
			<Formik
       initialValues={{ email: '', password: '', rememberMe: false }}
      //  validate={values => {
      //    const errors = {};
      //    if (!values.email) {
      //      errors.email = 'Required';
      //    } else if (
      //      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //    ) {
      //      errors.email = 'Invalid email address';
      //    }
      //    return errors;
      //  }}
       onSubmit={submit}
     >
       {({ isSubmitting }) => (
         <Form>
					<div>
					<Field name='email' placeholder={'email'}/>
					</div>
					<div>
					<Field name='password' placeholder={'password'}/>
					</div>
					<div>
					<Field type='checkbox' name="rememberMe"/> Запомнить меня
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
		<LoginForm getLoginUser={getLoginUser}/>
	</div>
 )
}

export default Login