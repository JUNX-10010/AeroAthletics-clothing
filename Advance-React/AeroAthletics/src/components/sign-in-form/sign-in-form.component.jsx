import "./sign-in.style.scss"
import { getRedirectResult } from "firebase/auth";
import {
  useEffect,
  useState,
} from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
  auth,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  signInEmailAndPassword,
  onAuthStateChangeListener
} from "../../utils/firebase/firebase.utils"; 



function SignInForm() {  
  const defaultFormFields = {
    email: "",
    password: ""
  };
  
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  useEffect(() => {
      const authUser = async () => {
        await getRedirectResult(auth);
      }
      authUser();
  }, [])
  
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInEmailAndPassword(email, password);
      await onAuthStateChangeListener();
      resetFormFields();
    } catch (e) {
      switch (e.code) {
        case 'auth/invalid-email':
          alert('Invalid email');
          break;
        case 'auth/wrong-password':
          alert('Invalid password');
          break;
        case 'auth/user-not-found':
          alert('User not found');
          break;
        
        default:
      }
    }

  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account </h2>
      <span>Sign  in with your email and password</span>
      <form onSubmit={handleSubmit}>
      
          <FormInput
              onChange={handleChange}
              label="Email"
              value={email}
              type="text"
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>  
          <Button onClick={signInWithGoogleRedirect}
            buttonType="google"
            type="button">  Sign In Google
          </Button>          
        </div>
    </form>  
    </div>
  );
}

export default SignInForm;

      // const logGoogleUser = async () => {
      // const { user } = await signInWithGoogleRedirect();
      // const { userDocRef } = await createUserDocumentFromAuth(user);
      // }


      