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
    const lbl = "Name ";
    const buttonStyle = {backgroundColor:'lightblue', color: 'white'};
    const test = {id : 1, name: 'Submit'}
    return(
        <div>
            <label htmlFor ="name">{lbl}</label>
            <input id="name" type="text" />
            <input type="submit" style = 
            {buttonStyle} value = {test.name}/> 
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