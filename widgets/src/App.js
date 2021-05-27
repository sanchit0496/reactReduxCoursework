import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Convert from './components/Convert.js';
import Route from './components/Route.js';
import Header from './components/Header.js';

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

// const showAccordion = () => {
//     if(window.location.pathname === '/'){
//         return <Accordion items = {item} />;
//     }
// }

// const showList = () => {
//     if(window.location.pathname === '/list'){
//         return <Search />;
//     }
// }

// const showDropdown = () => {
//     if(window.location.pathname === '/dropdown'){
//         return <Dropdown />;
//     }
// }

// const showTranslate = () => {
//     if(window.location.pathname === '/translate'){
//         return <Translate />;
//     }
// }

const App = () => {

    const [selected, setSelected] = useState(options[0]);

    return(
        <div>
            <Header />
            <Route path = "/">
                <Accordion items = {item}/>
            </Route>

            <Route path = "/list">
                <Search />
            </Route>

            <Route path = "/dropdown">
                <Dropdown
                label = "Select Color"
                options = {options}
                selected = {selected}
                onSelectedChange = {setSelected}
                />
            </Route>

            <Route path = "/translate">
                <Translate />
            </Route>

        </div>
    )
}

export default App;