import React from 'react'

const Total = ({parts}) => {
    const sum = parts.reduce((accumulator,current) => accumulator + current.exercises,0)
    return(
        <div>
            <strong>total of {sum} exercises </strong>
        </div>
    )
}
export default Total