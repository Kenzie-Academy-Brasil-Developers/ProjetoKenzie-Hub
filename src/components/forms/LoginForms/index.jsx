import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../Input/inputPassword";
import { zodResolver} from "@hookform/resolvers/zod";
import { FormSchema } from "./formSchema";
import { useContext, useState } from "react";

import styles from "./style.module.scss";
import { UserContext } from "../../../providers/UserContext";

export const LoginForm = () => {

    const {register, handleSubmit,  formState: {errors}, reset} = useForm({
        resolver: zodResolver(FormSchema)
    })

    const [loading, setLoading] = useState(false);

    const { userLogin} = useContext(UserContext)

    const Submit = (formData) => {
        userLogin(formData, setLoading, reset);
    }

    return(

        <form className={styles.formsLoginDate} onSubmit={handleSubmit(Submit)}>
            <Input label="Email" type="email" placeholder="E-mail" {...register("email")} disabled={loading} />
            <p className="label menssageError">{errors.email?.message}</p>
            <InputPassword label="Senha" placeholder="Senha" {...register("password")} disabled={loading} />
            <p className="label menssageError">{errors.password?.message}</p>
            <button className="buttons buttonLogin" disabled={loading} >{loading ?  "Entrando..." : "Entrar"}</button>
        </form>
    )
}