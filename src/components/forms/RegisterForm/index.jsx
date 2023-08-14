import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchemaRegister } from "./formsSchemaRegister";
import { api } from "../../../services/api";
import { toast } from 'react-toastify';
import { useState } from "react";

export const RegisterPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(FormSchemaRegister)
    })
    const Navigation = useNavigate()
    
    const [loading, setLoading] = useState(false)

    const useRegister = async (formData) => {
        try {
            setLoading(true)
            await api.post("users", formData)
            toast.success("Usuario cadastrado com sucesso")
            Navigation("/")
        } catch (error) {
            if(error.response?.data.message === "Email already exists"){
                toast.error("Usuario já cadastrado")
            }
        } finally{
            setLoading(false)
        }
    }

    const Submit = (formData) => {
        useRegister(formData)
    }

    return(
            <form onSubmit={handleSubmit(Submit)}>
                <Input label="Nome" type="text" placeholder="Digite aqui seu nome" {...register("name")} disabled={loading} />
                {errors.name?.message}
                <Input label="Email" type="email" placeholder="Digite aqui seu email" {...register("email")} disabled={loading} />
                {errors.email?.message}
                <Input label="Senha" type="password" placeholder="Digite aqui sua senha" {...register("password")} disabled={loading} />
                {errors.password?.message}
                <Input label="Confirmar Senha" type="password" placeholder="Digite novamente sua senha" {...register("confirmPassword")} disabled={loading} />
                {errors.confirmPassword?.message}
                <Input label="Bio" type="text" placeholder="Fale sobre você" {...register("bio")} disabled={loading} />
                {errors.bio?.message}
                <Input label="Contato" type="text" placeholder="Opção de contato" {...register("contact")} disabled={loading} />
                {errors.contact?.message}
                <select {...register("course_module")} disabled={loading} >
                    <option>Primeiro módulo (Introdução ao Frontend)</option>
                    <option>Segundo módulo (Frontend Avançado)</option>
                    <option>Terceiro módulo (Introdução ao Backend)</option>
                    <option>Quarto módulo (Backend Avançado)</option>
                </select>
                {errors.course_module?.message}
                <button disabled={loading} >
                    {loading ?  "Cadastrando..." : "Cadastrar"}
                </button>
            </form>
    )
}