
function IdCard ({lastName, firstName, gender, height, birth, picture}) {
    const date = birth.toDateString()
    return (
        <>
            <div className="container">
                <img src={picture} alt="user" />
                <ul>
                    <li><span>First name: </span>{firstName}</li>
                    <li><span>Last name: </span>{lastName}</li>
                    <li><span>Gender: </span>{gender}</li>
                    <li><span>Height: </span>{height}</li>
                    <li><span>Birth: </span>{date}</li>
                </ul>
            </div>
        </>
    )
}

export default IdCard