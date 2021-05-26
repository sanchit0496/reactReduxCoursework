import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Convert from './components/Convert.js';

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

let options = [
    {
        label: 'The Color Red',
        value: 'Red'
    },
    {
        label: 'The Color Green',
        value: 'Green'
    },
    {
        label: 'A Shade of Blue',
        value: 'Blue'
    }
]


const App = () => {

    return(
        <div>
            <Translate/>
        </div>
    )
}

export default App;