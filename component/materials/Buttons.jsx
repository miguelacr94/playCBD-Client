import React from 'react'

const Buttons = ({
    className,
    onClick,
    text,

}) => {
    return (
        <div>
            <button
                className={ `${className} rounded-3xl`}
                onClick={onClick}
            >
                {text}
            </button>

        </div>
    )
}

export default Buttons