import { MdClose } from "react-icons/md";
import { Input } from "../forms/Input";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { TechContext } from "../../providers/TechContext";

export const ModalCreate = ({setIsOpen}) => {

    const { register, handleSubmit, reset } = useForm();

    const { createTech} = useContext(TechContext);

    const submit = (formData) => {
        createTech(formData);
        reset();
    };

    return(
        <div className="modalOverlay" role="dialog">
            <div className="modalBox">
                <div className="headerModal">
                    <h2 className="tipograph modaltitle">Cadastrar Tecnologia</h2>
                    <button className="closeButton" onClick={() => setIsOpen(false)}>
                        <MdClose size={20} />
                    </button>
                </div>
                <form className="formModal" onSubmit={handleSubmit(submit)}>
                    <Input label="Nome" placeholder="Tecnologia" type="text" {...register("title")} />
                    <label className="label" id="select">Selecionar status</label>
                    <select className="select" {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <button className="buttons buttonLogin">Cadastrar Tecnologia</button>
                </form>
            </div>
        </div>
    )
};