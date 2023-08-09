import { RegisterPage } from "../../components/forms/RegisterForm"
import logo from "../../images/Logo.jpg"


export const Register = () => {
    return(
        <main>
            <img src={logo} alt="Logo Kenzie Hub" />
            <h2>Crie sua conta</h2>
            <p>Rapido e grátis, vamos nessa </p>
            <RegisterPage />
        </main>
    )
}