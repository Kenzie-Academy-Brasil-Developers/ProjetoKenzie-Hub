import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../../images/Logo.jpg"

export const LoginForm = () => {
    const Navigation = useNavigate()
    const {register, handleSubmit} = useForm()

    const Submit = (formData) => {
        Navigation("/register")
        
    }

    return(
        <form onSubmit={handleSubmit(Submit)}>
            <img src={logo} alt="Logo Kenzie Hub" />
            <Input label="Email" type="email" placeholder="E-mail" {...register("email")} />
            <Input label="Senha" type="password" placeholder="Senha" {...register("password")} />
            <button>Entrar</button>
            <p>Ainda não possui uma conta? </p>
            <Link to="/register" >Cadastre-se</Link>
        </form>
    )
}