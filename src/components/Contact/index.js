import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';

function ContactForm() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name:'', email: '', message: ''});
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }
    return (
        <section>
            <h1>Contact Me</h1>
            <br />
            <form id = "contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type ="text" name="Name" defaultValue={name} onBlur={handleChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="email">Email address: </label>
                    <input type ="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea name="Message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                <br />
                
                <button type='submit'>Submit</button>
            </form>
            {errorMessage && (
                    <p className='error'>{errorMessage}</p>
                )}
            <p>Email: aminisyrous@gmail.com</p>
            <p>Find links to my other profiles at the bottom of the page!</p>
            
        </section>
    );

}

export default ContactForm;