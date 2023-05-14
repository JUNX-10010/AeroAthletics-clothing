import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils"; 
import { Fragment } from "react";

import { useState } from "react";
import { FaGoogle, FaTwitter } from "react-icons/fa";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logGoogleUser = async () => {
            const { user } = await signInWithGooglePopup();
            const { userDocRef } = await createUserDocumentFromAuth(user);
    
        }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen scroll-m-0 ">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-center text-2xl font-bold mb-4">Sign in</h1>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="font-medium">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-gray-400 border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border-gray-400 border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="bg-black text-white rounded-md py-2 px-4 hover:bg-gray-900 transition-colors duration-200"
            type="submit"
          >
            Sign in
          </button>
        </form>
        <div className="mt-4">
          <span className="text-gray-500 font-medium">
            or continue with
          </span>
        </div>
        <div className="flex mt-4">
        

          <div className="bg-white text-gray-700 rounded-md py-2 px-4 shadow-sm hover:shadow-lg transition duration-200 flex items-center justify-center space-x-2">
            <Fragment>
                <FaGoogle/>
                <button onClick={logGoogleUser}>Google</button>
            </Fragment>
          </div>

          <a
            href="#"
            className="bg-white text-gray-700 rounded-md py-2 px-4 shadow-sm hover:shadow-lg transition duration-200 flex items-center justify-center space-x-2 ml-2"
          >
            <FaTwitter />
            <span className="text-gray-700">Twitter</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignIn;


// const SignIn = () => {

//     const logGoogleUser = async () => {
//         const { user } = await signInWithGooglePopup();
//         createUserDocumentFromAuth(user);
//         console.log(response);

//     }

//     return (
//         <Fragment>
//             <div>Sign In Page</div>
//             <button onClick={logGoogleUser}>
//                 Sign In with Google
//             </button>
//         </Fragment>
//     );

// };

// export default SignIn;