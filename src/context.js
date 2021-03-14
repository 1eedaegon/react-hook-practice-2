import React, { useContext, useState } from "react"

const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'nico',
        loggedIn: false
    });
    const logInUser = () => setUser({ ...user, loggedIn: true })
    const logOutUser = () => setUser({ ...user, loggedIn: false })
    return (
        <UserContext.Provider value={{ user, auth: { logInUser, logOutUser } }}>
            {children}
        </UserContext.Provider>
    )
}
export const useUser = () => {
    const { user } = useContext(UserContext);
    return user;
}
export const useAuth = () => {
    const { auth } = useContext(UserContext);
    return auth;

}
export default UserContextProvider;