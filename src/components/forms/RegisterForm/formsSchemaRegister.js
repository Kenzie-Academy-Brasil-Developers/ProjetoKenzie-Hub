import { z } from "zod";


export const FormSchemaRegister = z.object({
    name: z.string().nonempty("Nome é obrigatório"),
    email: z.string().nonempty("E-mail é obrigatório").email("Forneça um e-mail válido"),
    password: z.string().nonempty("A senha é obrigatória").min(8, "É necessario pelo menos 8 caracteres.").regex(/[A-Z]/, "É necessario pelo menos uma letra maiuscula").regex(/[a-z]/, "É necessario pelo menos uma letra minuscula").regex(/[0-9]/, "É necessario pelo menos um número"),
    confirmPassword: z.string().nonempty("Confirmar a senha é obrigatório"),
    bio: z.string().nonempty("Este campo é obrigatório"),
    contact: z.string().nonempty("Este campo é obrigátorio"),
    course_module:z.string().nonempty("Este campo é obrigátorio")
}).refine(({password, confirmPassword}) => password === confirmPassword, {
    message: "As senhas não coincidem", 
    path: ["confirmPassword"]
} );