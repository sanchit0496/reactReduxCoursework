import React from 'react';
import Accordion from './components/Accordion';


let item = [
    {
        title: "title 01",
        content: "content 01"
    },
    {
        title: "title 02",
        content: "content 02"
    },
    {
        title: "title 03",
        content: "content 03"
    }
]


const App = () => {
    return(
        <div>
            <Accordion items = {item}/>
        </div>
    )
}

export default App;