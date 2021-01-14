import React from 'react'

import {ErrorMessage, Formik, Form, Field} from 'formik'
import * as yup from 'yup';
import axios from 'axios'

import '../login/Login.css'

const Login = () => {
   const handleSubmit = values => console.log(values)
   const validations = yup.object().shape({
       email: yup.string().email().required(),
       password: yup.string().min(8).required()
   })
   return( <>
        <h1>Login to your account</h1>
        <p>Complete all your informations</p>
        <Formik initialValues={{}} 
        onSubmit = {handleSubmit} 
        validationSchema= {validations}>
            <Form className="Login-field">
               <div className='Form-Group'>
                   <Field 
                   name='email' 
                   className='Form-field'
                    />
                    <ErrorMessage 
                       component='span' 
                       name='email' 
                       className='Form-error'
                    />
                </div>
                <div className='Form-Group'>
                   <Field 
                   name='password' 
                   className='Form-field'
                    />
                    <ErrorMessage 
                       component='span' 
                       name='password' 
                       className='Form-error'
                    />
                </div>
                <button className='Form-Btn' type='submit'>Login</button>  
            </Form>
        </Formik>
    </>
   )
}

export default Login