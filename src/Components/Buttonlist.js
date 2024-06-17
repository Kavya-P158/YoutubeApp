import React from 'react'
import Button from './Button'
const Buttonlist = () => {
    const btnarray = ["Cooking", "Movies", "Bollywood", , "Skincare", "Coding", "React", "Hollywood", "Science"]
    return (
        <div className='p-2'>

            {
                btnarray.map((item) => <Button key={item} name={item} />)
            }

        </div>
    )
}

export default Buttonlist