import React from 'react'

const getSeason = (lat, month) => { 
    if (month > 2 && month < 9)
        return lat > 0 ? 'summer' : 'winter';
    else
        return lat > 0 ? 'winter' : 'summer';
};

const Season = ({ latitude }) => {
    const currentSeason = getSeason(latitude, new Date().getMonth());
    let text, icon;
    if (currentSeason === 'summer') {
        text = "Let's hit the beach";
        icon = 'sun';
    } else if (currentSeason === 'winter') {
        text = "Burr.. It is chilly";
        icon = 'snowflake';
    }

    return (
        <div className={`season ${currentSeason}`}>
            <i className={`massive ${icon}  icon top-left-icon`} ></i>
            <h1>{ text }</h1>
            <i className={`massive ${icon} icon bottom-right-icon`}></i>
        </div>
    )
}

export default Season