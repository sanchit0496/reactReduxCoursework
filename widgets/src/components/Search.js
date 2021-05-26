import React, {useState, useEffect} from 'react';

const Search = () => {

    const [term, setTerm] = useState('');

    console.log("I run with every render");

    useEffect(() => {
        console.log("I run at initial render");
    }, [])



    useEffect(() => {
        console.log("I run at initial render or when data changed");
    }, [term])

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter the Search Term</label>
                    <input
                    value = {term} 
                    className="input"
                    onChange = {(e) => setTerm(e.target.value)} 
                    type="text" />
                </div>
            </div>
        </div>
    )
}

export default Search;