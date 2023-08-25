import { useContext, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TechContext } from "../../providers/TechContext";
import { EditTechModal } from "../EditTechModal";
import styles from "./styles.module.scss";
export const TechCard = ({tech}) => {
    const { deleteTech, setEditTech } = useContext(TechContext);

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div>
            <li className={styles.card}>
                <div>
                    <h3 className="tipograph titleTech">{tech.title}</h3>
                </div>
                <div className={styles.divInfo}>
                    <p className="tipograph titleStatus">{tech.status}</p>
                    <div className={styles.divIcons}>
                        <button className="bntIcon" onClick={() => setEditTech(tech)} title="edit" aria-label="edit">
                            <MdOutlineEdit className={styles.Icon} />
                        </button>
                        <button className="bntIcon" onClick={() => deleteTech(tech.id)} title="delete" aria-label="delete">
                            <RiDeleteBin6Line className={styles.Icon} />
                        </button>
                    </div>
                    
                </div>
            </li>
            {isOpen ? <EditTechModal setIsOpen={setIsOpen} /> : null }
        </div>
    );
};