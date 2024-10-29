import { useState } from 'react'
import './index.scss'

const Textfield = (props) => {
    const [onFocused, setOnFocused] = useState(false)

    return (
        <div className='input-container'>
            <label htmlFor={props.label} className={onFocused ? 'label-focused' : 'label-enabled'}>{props.label}</label>
            <input
                id={props.label}
                type="text"
                onFocus={() => setOnFocused(true)}
                onBlur={() => setOnFocused(false)}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default Textfield