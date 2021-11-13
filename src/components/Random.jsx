import React from 'react'

function Random({min, max}) {
    const rand = Math.floor(Math.random() * (max - min + 1) + min)
    return (
        <>
            <div className="container">
                <p>Random value between {min} and {max} =&gt; {rand} </p>
            </div>
        </>
    )
}

export default Random
