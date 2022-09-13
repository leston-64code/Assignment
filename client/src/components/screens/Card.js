import React from 'react'
import "../css/card.css"
import mainimg from "../img/279393892_760706071604023_4469825481564459161_n (1) 1.jpg"
import loco from "../img/loco.svg"

const Card = () => {
    return (
    <>

            {/* <div className="card-container"> */}

                <div className="card" style={{"backgroundColor":"white"}}>
                    <img src={mainimg} alt="" className="c-img"/>
                        <p className="card-title">2BHK Apartment for Sale</p>
                        <div className="card-text-holder">
                            <p className="card-text"><img src={loco} alt=""/> Bhela</p>
                            <p className="card-text last-checker">&#8377; 15000</p>
                        </div>

                        <p className="contact-button">Contact Now</p>
                        <p className="learn-button">Learn More</p>
                </div>
                {/* </div> */}

            </>
            )
}

            export default Card
