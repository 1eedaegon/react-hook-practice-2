import { useContext } from "react"
import { useUser } from './context'
const Header = () => {
    const { name, loggedIn } = useUser();
    return (
        <header>
            <a href="#Home">Home</a>
            <h1> Welcome! {name}, You're {loggedIn ? 'logged in.' : 'anounymous.'}</h1>
        </header>
    )
}

export default Header