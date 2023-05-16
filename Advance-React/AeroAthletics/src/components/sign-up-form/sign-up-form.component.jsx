import './sign-up-form.style.scss'
import React, { useState } from "react";
import { createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";


const SignUpForm = () => {
    const defaultFormFields = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword ) {
            alert("Passwords don't match");
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName: displayName });
            resetFormFields();

        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Email already in use");
            }
            console.log(error);
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
            
                <FormInput
                    onChange={handleChange}
                    label="Display Name"
                    value={displayName}
                    type="text"
                    required
                    name="displayName"
                />

                <FormInput 
                    onChange={handleChange}
                    label="Email"
                    value={email}
                    type="email"
                    required
                    name="email"
                />

                <FormInput 
                    onChange={handleChange}
                    label="Password"
                    value={password}
                    type="password"
                    required
                    name="password"
                />

                <FormInput 
                    onChange={handleChange}
                    label="Confirm Password"
                    value={confirmPassword}
                    type="password"
                    required
                    name="confirmPassword"
                />

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;