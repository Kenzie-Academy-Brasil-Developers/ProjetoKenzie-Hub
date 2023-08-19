import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchemaRegister } from "./formsSchemaRegister";
import { useContext, useState } from "react";
import styles from "./style.module.scss";
import { UserContext } from "../../../providers/UserContext";

export const RegisterPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(FormSchemaRegister)
    });
    
    const [loading, setLoading] = useState(false);

    

    const Submit = (formData) => {
        useRegister(formData, setLoading);
    };

    const { useRegister } = useContext(UserContext);

    return(
            <form className={styles.formRegister} onSubmit={handleSubmit(Submit)}>
                <Input label="Nome" type="text" placeholder="Digite aqui seu nome" {...register("name")} disabled={loading} />
                <p className="menssageError">{errors.name?.message}</p>
                <Input label="Email" type="email" placeholder="Digite aqui seu email" {...register("email")} disabled={loading} />
                <p className="menssageError">{errors.email?.message}</p>
                <Input label="Senha" type="password" placeholder="Digite aqui sua senha" {...register("password")} disabled={loading} />
                <p className="menssageError">{errors.password?.message}</p>
                <Input label="Confirmar Senha" type="password" placeholder="Digite novamente sua senha" {...register("confirmPassword")} disabled={loading} />
                <p className="menssageError">{errors.confirmPassword?.message}</p>
                <Input label="Bio" type="text" placeholder="Fale sobre você" {...register("bio")} disabled={loading} />
                <p className="menssageError">{errors.bio?.message}</p>
                <Input label="Contato" type="text" placeholder="Opção de contato" {...register("contact")} disabled={loading} />
                <p className="menssageError">{errors.contact?.message}</p>
                
                <label className="label" htmlFor="select">Selecionar módulo</label>
                <select className={styles.select} {...register("course_module")} disabled={loading} >
                    <option>Primeiro módulo (Introdução ao Frontend)</option>
                    <option>Segundo módulo (Frontend Avançado)</option>
                    <option>Terceiro módulo (Introdução ao Backend)</option>
                    <option>Quarto módulo (Backend Avançado)</option>
                </select>
                <p className="menssageError">{errors.course_module?.message}</p>
                <button className="buttons buttonLogin" disabled={loading} >
                    {loading ?  "Cadastrando..." : "Cadastrar"}
                </button>
            </form>
    );
};