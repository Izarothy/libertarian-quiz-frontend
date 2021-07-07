import React from 'react'
const Button = ({answer, onClick}) => {
    return (
        <button onClick={onClick} className={`rounded-xl border-yellow-400 border-2 hover:bg-yellow-400 bg-inherit text-gray-300 transition duration-300 py-2 px-4 my-1 text-left`}>
            {answer}
        </button>
    )
}

export default Button
