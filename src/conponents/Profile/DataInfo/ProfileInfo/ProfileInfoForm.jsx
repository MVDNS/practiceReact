import React from "react";
import {Formik, Form, Field} from 'formik'

const ProfileInfoForm = ({profile}) => {
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
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ 
				isSubmitting,
			 	values }) => (
         <Form>
					<div>
           <Field type="text" name="fullName" placeholder={"fullName"} value={values.fullName}/>
					</div>
					<div>
           <Field type="text" name="aboutMe" placeholder={"aboutMe"} value={values.aboutMe}/>
					</div>
					<div>
           <Field type="checkbox" name="lookingForAJob" placeholder={"lookingForAJob"}/> Looking for a job
					</div>
					<div>
           <Field type="textarea" name="lookingForAJobDescription" placeholder={"lookingForAJobDescription"} value={values.lookingForAJobDescription}/>
					</div>
					{
					 Object.keys(values.contacts).map( contact => <div key={contact}><Field type="text" name={'contacts.' + contact} placeholder={contact} value={values.contacts[contact] || ''}/></div>)
					}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
	)
}



export default ProfileInfoForm
