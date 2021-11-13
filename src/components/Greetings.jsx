
function Greetings({lang, children}) {
    let greet = ''
    switch (lang) {
        case 'de':
            greet = 'Hallo '
            break;
        case 'en':
            greet = 'Hello '
            break;
        case 'es':
            greet = 'Hola '
            break;
        case 'fr':
            greet = 'Bonjour '
            break;
    }
    return (

        <>
            <div className="container">{greet} {children}</div>
        </>
    )
}

export default Greetings
