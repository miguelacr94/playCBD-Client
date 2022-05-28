import React from 'react'

const Input = ({

    id,
    name,
    register,
    className,
    onChange,
    defaultValue,
    placeholder


}) => {
    return (
        <div>

          
                <input
                    // id={...register(id)}
                    name={name}
                    onChange={onChange}
                    defaultValue={defaultValue}
                    className={className}
                    placeholder={placeholder}
                />

        


        </div>
    )
}

export default Input