import PropTypes from "prop-types";
import {
    createContext,
    useEffect,
    useState
} from "react";
import {
    createUserDocumentFromAuth,
    onAuthStateChangeListener
} from "../utils/firebase/firebase.utils";

// set the actula value you want access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => { }
});

// create a custom hook to use the userContext
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangeListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return () => {
            unsubscribe;
        }   
    },[]);
    return ( <UserContext.Provider value={value}>{children}</UserContext.Provider> );
}

// set prop types
UserProvider.propTypes = {
    children: PropTypes.node.isRequired
};
export default UserContext;