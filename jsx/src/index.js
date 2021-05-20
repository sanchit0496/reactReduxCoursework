//import React and ReactDOM library
 import React from 'react';
 import ReactDOM from 'react-dom';

 //craete component
const App =  () => {
    return(
        <div>
            <label for="name">Name</label>
            <input id="name" type="text" />
            <input type="submit" style = 
            {{backgroundColor:'lightblue', color: 'white'}} value = "Submit"/>
        </div>
    )
}

//display on the screen
ReactDOM.render(
    <App />,
    document.getElementById('root')
)








//create a react component

//take the react component and show on screen