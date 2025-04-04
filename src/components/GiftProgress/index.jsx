import React from "react";
import "./index.css"

const GiftProgress = ({amountAwayFromGift,progress}) => {
    return (
        <div className="gift-progress">
            <div className="gift-progress__message">
                Add {amountAwayFromGift} more to get a FREE Wireless Mouse!
            </div>
            <div className="gift-progress__bar-container">
                <div className="gift-progress__bar"
                style = {{width:`${progress}%`}}></div>
            </div>
        </div>
    )
}

export default GiftProgress;