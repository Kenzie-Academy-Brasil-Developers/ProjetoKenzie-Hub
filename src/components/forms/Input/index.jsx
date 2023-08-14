import { forwardRef } from "react"

export const Input = forwardRef(({label, ...rest}, ref) => {
    return(
        <div className="inputBox">
            <label className="label">
                {label}
                <input className="input" ref={ref} {...rest} /> 
            </label>
        </div>
    )
})