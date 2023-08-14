import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { Link, useNavigate } from "react-router-dom";
import { InputPassword } from "../Input/inputPassword";
import { zodResolver} from "@hookform/resolvers/zod";
import { FormSchema } from "./formSchema";
import { useState } from "react";
import { api } from "../../../services/api";
import { toast } from 'react-toastify';
import styles from "./style.module.scss"

export const LoginForm = ({setUser}) => {
    const Navigation = useNavigate();

    const {register, handleSubmit,  formState: {errors}} = useForm({
        resolver: zodResolver(FormSchema)
    })

    const [loading, setLoading] = useState(false);

    const userLogin = async (formData) => {
        try {
            setLoading(true);
            const { data } = await api.post("sessions", formData);
            toast.success("Login feito com sucesso");
            setUser(data.user);
            localStorage.setItem("@TOKEN", data.token );
            Navigation("/dashboard");
        } catch (error) {
            if(error.response?.data.message === 'Incorrect email / password combination'){
                toast.error("O Email e a senha não coincidem")
            }
        } finally{
            setLoading(false);
        }
    }

    const Submit = (formData) => {
        userLogin(formData);
    }

    return(

        <form className={styles.formsLoginDate} onSubmit={handleSubmit(Submit)}>
            <Input label="Email" type="email" placeholder="E-mail" {...register("email")} disabled={loading} />
            {errors.email?.message}
            <InputPassword label="Senha" placeholder="Senha" {...register("password")} disabled={loading} />
            {errors.password?.message}
            <button className="buttons buttonLogin" disabled={loading} >{loading ?  "Entrando..." : "Entrar"}</button>
            <p className="tipograph pLogin">Ainda não possui uma conta? </p>
            <button className="buttons buttonRegister"> <Link  to="/register">Cadastre-se</Link></button>
        </form>
    )
}