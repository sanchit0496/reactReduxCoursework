import React from 'react';


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
    
    let text = "";
    if(season === 'summer'){
        text = 'Its Summer'
    }else{
        text = 'Its Winter'
    }

    let icon = "";
    if(season === 'winter'){
        icon = 'snowflake'
    }else{
        icon = 'sun'
    }

    return(
        <div>
            <i className = {`${icon} icon`} />
            <h1>{text}</h1>
            <i className = {`${icon} icon`} />
        </div>
    )
}

export default SeasonDisplay;