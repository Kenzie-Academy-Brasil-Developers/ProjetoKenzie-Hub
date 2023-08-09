import { useForm } from "react-hook-form"

export const LoginForm = () => {

    const {register, handleSubmit} = useForm()

    const Submit = (formData) => {

    }

    return(
        <form onSubmit={handleSubmit(Submit)}>
            <h1>aaaa</h1>
        </form>
    )
}