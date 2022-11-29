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
       
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
					updateProfileData(values)
           //alert(JSON.stringify(values, null, 2));
					setEditModeProfile(false)
          setSubmitting(false);
         }, 400);
       }}
     >
       {({ 
				isSubmitting,
			 	values }) => (
         <Form>
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
					</div>
					{
					 Object.keys(values.contacts).map( contact => <div key={contact} className={s.contactsForm}> {contact + ':'} <Field type="text" name={'contacts.' + contact} placeholder={contact} value={values.contacts[contact] || ''}/></div>)
					}
           <button type="submit" disabled={isSubmitting}>
             Save changes
           </button>
         </Form>
       )}
     </Formik>
   </div>
	)
}



export default ProfileInfoForm
