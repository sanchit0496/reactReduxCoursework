import React from 'react';

const seasonConfig = {
    summer:{
        text: "Its Summer",
        icon: "sun"
    },
    winter:{
        text: "Its Winter",
        icon: "snowflake"
    }
}

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }
    else{
        return lat > 0 ? 'winter' : 'summer';
    }
}


const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth())
    let seasonInfo = seasonConfig[season];

    return(
        <div>
            <i className = {`${seasonInfo.icon} icon`} />
            <h1>{seasonInfo.text}</h1>
            <i className = {`${seasonInfo.icon} icon`} />
        </div>
    )
}

export default SeasonDisplay;