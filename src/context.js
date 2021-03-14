import React, { useState } from "react"

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'nico',
        loggedIn: false
    });
    const logInUser = () => setUser({ ...user, loggedIn: true })
    const logOutUser = () => setUser({ ...user, loggedIn: false })
    return (
        <UserContext.Provider value={{ user, logInUser, logOutUser }}>{children}</UserContext.Provider>
    )
}

export default UserContextProvider;