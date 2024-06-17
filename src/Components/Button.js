import React from 'react'

const Button = ({ name }) => {
    return (
        <button className='rounded-md p-1 m-1 bg-gray-200'>{name}</button>
    )
}

export default Button