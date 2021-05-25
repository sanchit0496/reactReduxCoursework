import React, {useState} from 'react';

const Search = () => {

    const [term, setTerm] = useState('');

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