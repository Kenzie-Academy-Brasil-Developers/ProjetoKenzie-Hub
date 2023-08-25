import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { Input } from "../forms/Input";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";


export const EditTechModal = ({setIsOpen}) => {
    const {editTech, setEditTech, editingTech} = useContext(TechContext);

    const { register, handleSubmit} = useForm({
        values: {
            status: editTech.status,
            title: editTech.title
        }
    });

    const submit = (formData) => {
        editingTech(formData)
    };

    return(
        <div className="modalOverlay" role="dialog">
            <div className="modalBox">
                <div className="headerModal">
                    <h2 className="tipograph modaltitle">Tecnologia detalhes</h2>
                    <button className="closeButton" onClick={() => setEditTech(null)}>
                        <MdClose />
                    </button>
                </div>
                <form className="formModal" onSubmit={handleSubmit(submit)}>
                    <Input label="Nome" placeholder="Tecnologia" type="text" {...register("title")} />
                    <label className="label" id="select">Status</label>
                    <select className="select" {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <button className="buttons buttonLogin">Salvar alterações</button>
                </form>
                
            </div>
        </div>
    );
};