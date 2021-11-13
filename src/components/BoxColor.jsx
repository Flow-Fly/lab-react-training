import React from 'react'

function BoxColor({r, g, b}) {

    let rH = rgbToHex(r)
    let gH = rgbToHex(g)
    let bH = rgbToHex(b)
    const treshold = (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#000' : '#fff'
    return (
        <>

            <div className="container" style={{
                backgroundColor: `rgb(${r}, ${g}, ${b})`,
                color: treshold
            }}>
                <p>rgb({r}, {g}, {b}) <br></br></p>
                <p>#{rH}{gH}{bH} </p>
            </div>

        </>
    )
}

export default BoxColor

function rgbToHex (color) { 
    var hex = Number(color).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };