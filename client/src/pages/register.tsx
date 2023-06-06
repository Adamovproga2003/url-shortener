import React from 'react'
import styles from './../styles/Register.module.css'
import { Formik } from 'formik'
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import axios from 'axios'
import { useResponse } from 'context/ResponseContext'
import Router from "next/router";
import Link from 'next/link'
import { GoHomeButton } from 'components/GoHomeButton/GoHomeButton'

type Props = {}
type IValues = {
    name: string,
    email: string,
    password: string
}

type ISubmitting = {
    setSubmitting: (isSubmitting: boolean) => void
}

const register = (props: Props) => {

    const { onChangeMessage, onChangeErrors } = useResponse();

    const validate = (values: IValues) => {
        const errors: { name?: string, email?: string, password?: string } = {};
        if (!values.name) {
            errors.name = 'Required';
        }

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
    }

    const signUp = (values: IValues, { setSubmitting }: ISubmitting) => {
        const instance = axios.create({
            withCredentials: true,
            baseURL: 'http://localhost:4001/api'
        })
        instance.post(
            '/auth/register',
            {
                name: values.name,
                email: values.email,
                password: values.password
            })
            .then(function (res) {
                onChangeMessage(res.data.message)
                Router.replace("/")
            })
            .catch(function (res) {
                onChangeErrors([res.response.data.errors])
            })
        setSubmitting(false);
    }

    return (
        <main className={styles.formSignUp}>
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                validate={validate}
                onSubmit={signUp}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    isValid,
                    dirty
                }) => (
                    <form onSubmit={handleSubmit} className='needs-validation formContainer'>
                        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
                        <div className="form-floating">
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                className={cn("form-control", styles.nameInput, {
                                    "is-invalid": errors.name && touched.name,
                                    "is-valid": !errors.name && touched.name
                                })}
                                placeholder='Name'
                            />
                            <label>Name</label>
                            <AnimatePresence>
                                {errors.name && touched.name && (
                                    <motion.span
                                        initial={{ translateX: 0, opacity: 0 }}
                                        animate={{ translateX: '95px', opacity: 1 }}
                                        exit={{ translateX: 0, opacity: 0 }}
                                        transition={{
                                            ease: "linear",
                                            opacity: { duration: 0.5 },
                                            translateX: { duration: 1 }
                                        }}
                                        className='errorContainer'
                                    >
                                        {errors.name && touched.name && errors.name}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="form-floating">
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                className={cn("form-control", styles.emailInput, {
                                    "is-invalid": errors.email && touched.email,
                                    "is-valid": !errors.email && touched.email
                                })}
                                id="emailInput"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInput">Email address</label>
                            <AnimatePresence>
                                {errors.email && touched.email && (
                                    <motion.span
                                        initial={{ translateX: 0, opacity: 0 }}
                                        animate={{ translateX: '95px', opacity: 1 }}
                                        exit={{ translateX: 0, opacity: 0 }}
                                        transition={{
                                            ease: "linear",
                                            opacity: { duration: 0.5 },
                                            translateX: { duration: 1 }
                                        }}
                                        className='errorContainer'>{errors.email && touched.email && errors.email}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="form-floating inputContainer">
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                className={cn("form-control", {
                                    "is-invalid": errors.password && touched.password,
                                    "is-valid": !errors.password && touched.password
                                })}
                                id="passwordInput"
                                placeholder="Password"
                            />
                            <label htmlFor="floatingPassword">Password</label>
                            <AnimatePresence>
                                {errors.password && touched.password && (
                                    <motion.span
                                        initial={{ translateX: 0, opacity: 0 }}
                                        animate={{ translateX: '95px', opacity: 1 }}
                                        exit={{ translateX: 0, opacity: 0 }}
                                        transition={{
                                            ease: "linear",
                                            opacity: { duration: 0.5 },
                                            translateX: { duration: 1 }
                                        }}
                                        className='errorContainer'>{errors.password && touched.password && errors.password}
                                    </motion.span>
                                )}
                            </AnimatePresence>

                        </div>
                        <p><Link href={'/login'}>Already have account? Sign in</Link></p>
                        <button
                            className="w-100 btn btn-lg btn-primary"
                            type="submit"
                            disabled={!isValid || !dirty}
                        >
                            Sign Up
                        </button>
                        <p className="mt-5 mb-3 text-muted">© {new Date().getFullYear() - 1}–{new Date().getFullYear()}</p>
                    </form>
                )}
            </Formik>
            <GoHomeButton />
        </main>
    )
}

export default register