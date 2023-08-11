import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../../images/Logo.jpg"
import { InputPassword } from "../Input/inputPassword"
import { zodResolver} from "@hookform/resolvers/zod"
import { FormSchema } from "./formSchema"

export const LoginForm = () => {
    const Navigation = useNavigate()
    const {register, handleSubmit,  formState: {errors}} = useForm({
        resolver: zodResolver(FormSchema)
    })

    const Submit = (formData) => {
        Navigation("/register")
        
    }

    return(
        <form onSubmit={handleSubmit(Submit)}>
            <img src={logo} alt="Logo Kenzie Hub" />
            <Input label="Email" type="email" placeholder="E-mail" {...register("email")} />
            {errors.email?.message}
            <InputPassword label="Senha" placeholder="Senha" {...register("password")} />
            {errors.password?.message}
            <button>Entrar</button>
            <p>Ainda não possui uma conta? </p>
            <Link to="/register" >Cadastre-se</Link>
        </form>
    )
}