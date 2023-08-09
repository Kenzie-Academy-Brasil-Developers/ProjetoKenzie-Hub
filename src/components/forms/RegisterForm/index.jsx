import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { useNavigate } from "react-router-dom"
export const RegisterPage = () => {
    const {register, handleSubmit} = useForm()
    const Navigation = useNavigate()
    
    const Submit = (formData) => {
        Navigation("/")
        
    }
    return(
            <form onSubmit={handleSubmit(Submit)}>
                <Input label="Nome" type="text" placeholder="Digite aqui seu nome" {...register("name")} />
                <Input label="Email" type="email" placeholder="Digite aqui seu email" {...register("email")} />
                <Input label="Senha" type="password" placeholder="Digite aqui sua senha" {...register("password")} />
                <Input label="Confirmar Senha" type="password" placeholder="Digite novamente sua senha" {...register("password")} />
                <Input label="Bio" type="text" placeholder="Fale sobre você" {...register("password")} />
                <Input label="Contato" type="text" placeholder="Opção de contato" {...register("contact")} />
                <select>
                    <option>Primeiro modulo</option>
                    <option>Segundo modulo</option>
                    <option>Terceiro modulo</option>
                </select>
                <button>Cadastrar</button>
            </form>
    )
}