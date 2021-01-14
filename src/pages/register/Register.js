import React from 'react'

import {ErrorMessage, Formik, Form, Field} from 'formik'
import * as yup from 'yup';

const Register = () => {

const handleSubmit = values => console.log(values)
const validations = yup.object().shape({
    name: yup.string().required(),
    surname:yup.string().required(),
    email: yup.string().email().required(),
    date: yup.date().required(),
    cpf: yup.number().optional(),
    cep: yup.number().optional(),
    address: yup.string().optional(),
    numero: yup.number().optional(),
    password: yup.string().min(8).required()
})

    return(  <>
        <h1>Register an account</h1>
        <p>Complete all your informations</p>
        <Formik initialValues={{}} 
            onSubmit = {handleSubmit} 
            validationSchema= {validations}>
            <Form className="Register-field">
               <div className='Form-Group'>
                   <Field 
                   name='name' 
                   className='Form-field'
                   placeholder="name"
                    />
                    <ErrorMessage 
                       component='span' 
                       name='name' 
                       className='Form-error'
                    />
                </div>
                <div className='Form-Group'>
                   <Field 
                   name='surname' 
                   className='Form-field'
                   placeholder="surname"
                    />
                    <ErrorMessage 
                       component='span' 
                       name='surname' 
                       className='Form-error'
                    />
                </div>
                <div className='Form-Group'>
                   <Field 
                   name='email' 
                   className='Form-field'
                   placeholder="Email"
                    />
                    <ErrorMessage 
                       component='span' 
                       name='email' 
                       className='Form-error'
                    />
                </div>
                <div className='Form-Group'>
                   <Field 
                   name='date' 
                   className='Form-field'
                   placeholder="Date"
                    />
                    <ErrorMessage 
                       component='span' 
                       name='date' 
                       className='Form-error'
                    />
                </div>
                <div className='Form-Group'>
                   <Field 
                   name='cpf' 
                   className='Form-field'
                   placeholder="CPF"
                    />
                    <ErrorMessage 
                       component='span' 
                       name='cpf' 
                       className='Form-error'
                    />
                </div>
                <div className='Form-Group'>
                   <Field 
                   name='cep' 
                   className='Form-field'
                   placeholder="CEP"
                    />
                    <ErrorMessage 
                       component='span' 
                       name='cep' 
                       className='Form-error'
                    />
                </div>
                <div className='Form-Group'>
                   <Field 
                   name='address' 
                   className='Form-field'
                   placeholder="address"
                    />
                    <ErrorMessage 
                       component='span' 
                       name='address' 
                       className='Form-error'
                    />
                </div>
                <div className='Form-Group'>
                   <Field 
                   name='number' 
                   className='Form-field'
                   placeholder="number"
                    />
                    <ErrorMessage 
                       component='span' 
                       name='number' 
                       className='Form-error'
                    />
                </div>
                <div className='Form-Group'>
                   <Field 
                   name='password' 
                   className='Form-field'
                   placeholder="password"
                    />
                    <ErrorMessage 
                       component='span' 
                       name='password' 
                       className='Form-error'
                    />
                </div>
                <button className='Form-Btn' type='submit'>Register</button>  
            </Form>
        </Formik>
    </>
)}
export default Register