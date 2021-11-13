import React from 'react'

function Rating({children}) {
    children = Math.round(children)
    let rating = ''
    for (let i = 0; i < 5; i++) {
        if (i < children) {
            rating += '★'
        } else {
            rating += '☆'
        }
    }
    return (
        <div className="container">
            <div className="rating">{rating}</div>
        </div>
    )
}

export default Rating
