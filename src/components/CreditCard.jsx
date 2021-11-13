import React from 'react'
import visa from '../assets/visa.png'
import masterCard from '../assets/masterCard.jpg'


function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    expirationYear %= 100;
    if (expirationMonth > 9) {
        expirationMonth = '0' + expirationMonth
    }
    number = number.split('').splice(12, number.length).join('')
    const logo = type === 'Visa' ? visa : masterCard  
    return (
        <>
            <div className="credit-card" style={{
                backgroundColor: bgColor,
                color: color
            }}>
                <img className="logo" src={logo}></img>
                <div className="number" style={{
                    fontSize: '3rem'
                }}>•••• •••• ••••{number}</div>
                <div className="infos">
                    <div className="personal">
                        <p>Expires {expirationMonth}/{expirationYear}</p>
                        <p>{owner}</p>
                    </div>
                    <p>{bank}</p>
                </div>
            </div>


        </>
    )
}

export default CreditCard
