import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';


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

    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return(
        <div>
            <button onClick = { () => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown?
                <Dropdown 
                selected = {selected}
                onSelectedChange = {setSelected} 
                options = {options}/>: null
            }
        </div>
    )
}

export default App;