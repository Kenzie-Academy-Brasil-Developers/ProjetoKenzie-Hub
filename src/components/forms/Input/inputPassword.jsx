import { forwardRef, useState } from "react";
import { MdVisibility, MdVisibilityOff} from "react-icons/md";
import styles from "./style.module.scss"
export const InputPassword = forwardRef(({label, ...rest}, ref) => {
    const [isHidden, setIsHidden] = useState(true);
    return(
        <>
        <div className="">
            <label className="label">
                {label}
            </label>
            <div className="inputPassword">
                <input className={styles.inputReset} type={isHidden ? "password" : "text"} ref={ref} {...rest} /> 
                <button type="button" onClick={ () => setIsHidden(!isHidden)}>
                    {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
                </button>
            </div>
        </div>
        </>
        
    )
})