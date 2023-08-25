import { Link } from "react-router-dom";
import { RegisterPage } from "../../components/forms/RegisterForm";
import logo from "../../images/Logo.svg";
import styles from "./style.module.scss";

export const Register = () => {
    return(
        <main>
            <div className={styles.FormsRegisterContainer}>
                <div className={styles.divContent}>
                    <img src={logo} alt="Logo Kenzie Hub" />
                    <button className={styles.buttonLink}><Link to="/">Voltar</Link></button>
                </div>
                <div className={styles.FormRegister}>
                    <div className={styles.divTitle}>
                        <h2 className="tipograph titleLogin">Crie sua conta</h2>
                        <p className="tipograph pLogin">Rapido e grátis, vamos nessa!</p>
                    </div>
                    <RegisterPage />
                </div>
            </div>
        </main>
    );
};