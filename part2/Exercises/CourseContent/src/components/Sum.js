import React from 'react'

const Sum = ({parts}) => {

    // const reducer = (accumulator, currentValue) => accumulator + currentValue;


    const total = parts.reduce( (sum, part) => sum + part)

    return(
        <div>
            <strong> Total of {total} exercises </strong>
        </div>
    )
}

export default Sum