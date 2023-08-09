import { z } from "zod";


export const FormSchemaRegister = z.object({
    name: z.string().nonempty("Nome é obrigatório"),
    email: z.string().nonempty("E-mail é obrigatório").email("Forneça um e-mail válido"),
    password: z.string().nonempty("A senha é obrigatória").min(8, "É necessario pelo menos 8 caracteres.").regex(/[A-Z]/).regex(/[a-z]/).regex(/[0-9]/)
})