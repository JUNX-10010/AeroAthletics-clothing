import { getRedirectResult } from "firebase/auth";
import  SignUpForm  from "../../components/sign-up-form/sign-up-form.component";
import {  useEffect } from "react";
import Button from "../../components/button/button.component";
import {
  auth,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils"; 



function SignIn() {
    useEffect(() => {
        const authUser = async () => {
            const response = await getRedirectResult(auth);
            if (response) {
                const { userDocRef } = await createUserDocumentFromAuth(response.user);
                return userDocRef;
                
            }
        }
        authUser();
    }, [])
  

  return (
    <div>
      <Button onClick={signInWithGoogleRedirect}
        buttonType="google"
        type="button"> Google Sign In
      </Button>
      <SignUpForm/>

    </div>
  );
}

export default SignIn;

      // const logGoogleUser = async () => {
      // const { user } = await signInWithGoogleRedirect();
      // const { userDocRef } = await createUserDocumentFromAuth(user);
      // }