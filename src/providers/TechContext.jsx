import { createContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({}); 

export const TechProvider = ({ children}) => {

    const [techList, setTechList] = useState([]);
    const [ editTech, setEditTech] = useState(null);

    const createTech = async (formData) => {
        const token = localStorage.getItem("@TOKEN");
        try {
            const { data } = await api.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setTechList([...techList, data])
            toast.success("Tecnologia adicionada com sucesso")
        } catch (error) {
            toast.error("Usuário Já tem essa tecnologia criada, só é possível atualizá-la")
        };
    };

    const deleteTech = async (deleteId) => {
        try {
            const token = localStorage.getItem("@TOKEN");
            await api.delete(`/users/techs/${deleteId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const newList = techList.filter(tech => tech.id !== deleteId);
            setTechList(newList)
            toast.success("Tecnologia excluída com sucesso");
        } catch (error) {
            toast.error("Ops! parece que algo deu errado");
        };
    };

    const editingTech = async (formData) => {
        try {
            const token = localStorage.getItem("@TOKEN");
            const { data } = await api.put(`/users/techs/${editTech.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            const newTechList = techList.map(tech => {
                if(tech.id === editTech.id){
                    return data;
                } else {
                    return tech;
                }
            })
            setTechList(newTechList);
            
            toast.success("Status editado com sucesso!");
        } catch (error) {
            toast.error("Ops! parece que algo deu errado!");
        };
    };

    return(
        <TechContext.Provider value={{ createTech, setTechList, techList, deleteTech, setEditTech, editTech, editingTech}}>
            {children}
        </TechContext.Provider>
    );
};