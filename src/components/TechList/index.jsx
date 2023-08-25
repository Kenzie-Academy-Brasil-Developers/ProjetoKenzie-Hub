import { MdAdd } from "react-icons/md";
import { TechCard } from "../TechCard";
import { useContext, useState } from "react";
import { TechContext } from "../../providers/TechContext";
import { ModalCreate } from "../CreateTechModal";
import { EditTechModal } from "../EditTechModal";
import styles from "./style.module.scss";

export const TechList = () => {

    const { techList, editTech} = useContext(TechContext);

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div>
            <div className={styles.divContent}>
                <h2 className="tipograph titleDashboard">Tecnologias</h2>
                <button onClick={() => setIsOpen(true)} className="tipograph textDashboard bnt">
                    <MdAdd size={20} />
                </button>
            </div>
            {isOpen ? <ModalCreate setIsOpen={setIsOpen} /> : null }
            {editTech && <EditTechModal /> }
            <div className={styles.divUl}>
                <ul>
                    {techList.map(tech => (
                        <TechCard key={tech.id} tech={tech} />
                    ))} 
                </ul>
            </div>
            
        </div>
    );
};