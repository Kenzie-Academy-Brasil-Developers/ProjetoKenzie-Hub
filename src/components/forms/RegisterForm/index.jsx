import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchemaRegister } from "./formsSchemaRegister";

export const RegisterPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(FormSchemaRegister)
    })
    const Navigation = useNavigate()
    
    const Submit = (formData) => {
        Navigation("/")
        
    }
    return(
            <form onSubmit={handleSubmit(Submit)}>
                <Input label="Nome" type="text" placeholder="Digite aqui seu nome" {...register("name")} />
                {errors.name?.message}
                <Input label="Email" type="email" placeholder="Digite aqui seu email" {...register("email")} />
                {errors.email?.message}
                <Input label="Senha" type="password" placeholder="Digite aqui sua senha" {...register("password")} />
                {errors.password?.message}
                <Input label="Confirmar Senha" type="password" placeholder="Digite novamente sua senha" {...register("password")} />
                {errors.password?.message}
                <Input label="Bio" type="text" placeholder="Fale sobre você" {...register("description")} />
                {errors.description?.message}
                <Input label="Contato" type="text" placeholder="Opção de contato" {...register("contact")} />
                {errors.contacts?.message}
                <select>
                    <option>Primeiro modulo</option>
                    <option>Segundo modulo</option>
                    <option>Terceiro modulo</option>
                </select>
                <button>Cadastrar</button>
            </form>
    )
}