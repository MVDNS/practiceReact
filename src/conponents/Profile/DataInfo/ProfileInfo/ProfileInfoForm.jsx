import React from "react";
import {Formik, Form, Field} from 'formik'
import s from '../DataInfo.module.css';

const ProfileInfoForm = ({profile, setEditModeProfile, updateProfileData}) => {
	
	return (
		<div>
     <Formik
       initialValues={{ 
				fullName: profile.fullName || '', 
				aboutMe: profile.aboutMe || '',
				lookingForAJob: profile.lookingForAJob,
				lookingForAJobDescription: profile.lookingForAJobDescription || '',
				contacts: profile.contacts
			}}

			validate={values => {
				const errors = {};
					// if (!values.email) {
					// 	errors.email = 'Required';
					// } else if (
					
					// ) {
					// 	errors.email = 'Invalid email address';
					// }
					// if (!values.password) {
					// 	errors.password = 'Required';
					// }
				return errors;
			}}
       
       onSubmit= {(values, { setSubmitting, setErrors }) => {
		setTimeout(() => {
		 updateProfileData(values, setErrors)
		 .then(() => {
			 setEditModeProfile(false)
			})
			setSubmitting(false)
			//alert(JSON.stringify(values, null, 2));
			// 	
		}, 400);
	}}
     >
       {({ 
				isSubmitting,
			 	values,
				 errors,
         touched,
				 }) => (
					
         <Form>
					<div>
						<div>Full name:
						<Field className={s.contactsForm} type="text" name="fullName" placeholder={"fullName"} value={values.fullName}/>
						</div>
						<div>About me:
						<Field className={s.contactsForm} type="text" name="aboutMe" placeholder={"aboutMe"} value={values.aboutMe}/>
						</div>
						<div>
						<Field className={s.contactsForm} type="checkbox" name="lookingForAJob" placeholder={"lookingForAJob"}/> Looking for a job
						</div>
						<div>Looking for a job description:
						<Field className={s.contactsForm} type="textarea" name="lookingForAJobDescription" placeholder={"lookingForAJobDescription"} value={values.lookingForAJobDescription}/>
						</div>Contacts: 
						{
						Object.keys(values.contacts).map( contact => <div key={contact} className={s.contactsForm}> {contact + ':'} <Field type="text" name={'contacts.' + contact} placeholder={contact} value={values.contacts[contact] || ''}/></div>)
						}
						<button type="submit" disabled={isSubmitting}>
							Save changes
						</button>
						<div className={errors.apiError ? s.error : '' }>{errors.apiError}</div>
					 </div>
         </Form>
       )}
     </Formik>
   </div>
	)
}



export default ProfileInfoForm
