import { useContext } from "react";
import { UserContext } from "./context";
import Header from "./Header";

const Screen = () => {
    const { logInUser, logOutUser } = useContext(UserContext)
    return (
        <div>
            <Header />
            <h2>Hello world!</h2>
            <button onClick={logInUser}>Log in user</button>
            <button onClick={logOutUser}>Log out user</button>
        </div>
    )
}

export default Screen