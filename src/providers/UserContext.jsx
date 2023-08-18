import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(false);

    const navigation = useNavigate();

    const pathname = window.location.pathname;

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        const getUser = async () => {
            try {
                setLoading(true)
                const { data } = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data)
                navigation(pathname)
            } catch (error) {
                toast.error("Ops! Algo deu errado!")
            } finally {
                setLoading(false)
            }
                
            
        }
        if(token){
            getUser();
        }
    }, [])
    
    const userLogin = async (formData, setLoading, reset) => {
        try {
            setLoading(true);
            const { data } = await api.post("sessions", formData);
            toast.success("Login feito com sucesso");
            setUser(data.user);
            localStorage.setItem("@TOKEN", data.token );
            reset();
            navigation("/dashboard");
        } catch (error) {
            if(error.response?.data.message === 'Incorrect email / password combination'){
                toast.error("O Email e a senha não coincidem")
            }
        } finally{
            setLoading(false);
        }
    }
    
    const useRegister = async (formData, setLoading) => {
        try {
            setLoading(true)
            await api.post("users", formData)
            toast.success("Usuario cadastrado com sucesso")
            navigation("/")
        } catch (error) {
            if(error.response?.data.message === "Email already exists"){
                toast.error("Usuario já cadastrado")
            }
        } finally{
            setLoading(false)
        }
    }
    
    const Logout = () => {
        setUser(null);
        navigation("/");
        localStorage.removeItem("@TOKEN");
    }
    return(
        <UserContext.Provider value={{loading,  user, useRegister, userLogin, Logout  }}>
            {children}
        </UserContext.Provider>
    )
}