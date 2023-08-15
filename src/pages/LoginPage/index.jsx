import { Link } from "react-router-dom";
import { LoginForm } from "../../components/forms/LoginForms";
import Logo from "../../images/Logo.svg";
import styles from "./styles.module.scss";

export const LoginPage = ({setUser}) => {
    return(
        <main className={styles.main}>
            <div className="Forms">
                <img src={Logo} alt="Logo Kenzie Hub" />
                <div className={styles.FormLogin}>
                    <h2 className="tipograph titleLogin" >Login</h2>
                    <LoginForm setUser={setUser} />
                    <p className="tipograph pLogin">Ainda não possui uma conta? </p>
                    <div className={styles.divButton}>
                        <button className="buttons buttonRegister"> <Link to="/register">Cadastre-se</Link></button>
                    </div>
                </div>
            </div>
            
        </main>
        
    )
}