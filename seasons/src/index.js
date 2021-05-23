import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay.js';

const App = () => {
        window.navigator.geolocation.getCurrentPosition(
                position => console.log(position),
                err => console.log(err)       
            )
        
    return(<h1>Hello</h1>)
}

ReactDOM.render(<App />, document.getElementById('root'));