import { forwardRef, useState } from "react";
import { MdVisibility, MdVisibilityOff} from "react-icons/md";
import styles from "./style.module.scss";

export const InputPassword = forwardRef(({label, ...rest}, ref) => {
    const [isHidden, setIsHidden] = useState(true);
    return(
        <>
        <div className="inputBox">
            <label className="label">
                {label}
            </label>
            <div className={styles.inputPassword}>
                <input className={styles.inputReset} type={isHidden ? "password" : "text"} ref={ref} {...rest} /> 
                <div className={styles.buttonHidden}>
                    <button  type="button" onClick={ () => setIsHidden(!isHidden)}>
                    {isHidden ? <MdVisibility className={styles.icon} /> : <MdVisibilityOff className={styles.icon}  />}
                    </button>
                </div>
                
            </div>
        </div>
        </>
    );
});