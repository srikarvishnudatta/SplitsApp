import { Button } from "@mantine/core"
import styles from "./Navbar.module.css"
import { useNavigate } from "react-router-dom"
function NavBar() {
    const navigate = useNavigate();
    function buttonNavigator(path:string){
        navigate(path);
    }
    return (
        <nav className={styles.nav}>
            <div className={styles.logolist} >
                <div className={styles.logotitle} onClick={() => buttonNavigator("/")}>
                    <img src="/favicons/favicon-48.png" className={styles.logo}/>
                    <h2>Splits</h2>
                </div>
                <ul className={styles.list}>
                    <li>
                        Github
                    </li>
                    <li>About us</li>
                </ul>
            </div>

            <div className={styles.buttoncontainer}>
                <Button variant="outline"
                    onClick={() => buttonNavigator("/login")}
                >Login</Button>
                <Button onClick={() => buttonNavigator("/create")}>Create account</Button>
            </div>
        </nav>
    )
}

export default NavBar