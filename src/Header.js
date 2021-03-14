import { useContext } from "react"
import { UserContext } from "./context"
const Header = () => {
    const { user: { name, loggedIn } } = useContext(UserContext)
    return (
        <header>
            <a href="#Home">Home</a>
            <h1> Welcome! {name}, You're {loggedIn ? 'logged in.' : 'anounymous.'}</h1>
        </header>
    )
}

export default Header