//import React and ReactDOM library
 import React from 'react';
 import ReactDOM from 'react-dom';

 //add () while calling the function to avoid any error or blank return
function getButtonText(){
    return 'Function Click'
}

 //craete component
const App =  () => {
    // const buttonText = 'Click Me';
    return(
        <div>
            <label for="name">Name</label>
            <input id="name" type="text" />
            <input type="submit" style = 
            {{backgroundColor:'lightblue', color: 'white'}} value = {getButtonText()}/> 
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