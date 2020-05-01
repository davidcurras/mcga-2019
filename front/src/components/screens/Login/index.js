import './style.css'
import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import MainLayout from '../../layouts/MainLayout'
import { fetchPost } from '../../../helpers/fetch'

class Login extends Component {

    onSubmit = formValues => {
        const { email, password } = formValues
        // dispatch loading action
        fetchPost('/user/signin', { email, password })
            .then(data => {
                // dispatch profile action
                console.log(data)
                // localstorage guardar data.token
                // react router redirigir (window.location)
            })
    }

    renderForm = formParams => {
        const { handleSubmit, form, submitting, pristine, values } = formParams
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>email</label>
                    <Field name="email" component="input" type="text" placeholder="youremail@uai.edu.ar" />
                </div>
                <div>
                    <label>Password</label>
                    <Field name="password" component="input" type="password" />
                </div>
                <div className="buttons">
                    <button type="submit" disabled={submitting || pristine}> Submit </button>
                    <button type="button" onClick={form.reset} disabled={submitting || pristine}> Reset </button>
                </div>
            </form>
        )
    }

    render() {
        return (
            <MainLayout>
                <h1>Login</h1>
                <Form
                    onSubmit={this.onSubmit}
                    render={this.renderForm}
                />
            </MainLayout>
        )
    }
}

export default Login
