import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.js';

class App extends React.Component{

    async onSearchSubmit(term){
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params:{
                query: term
            },
            headers:{
                Authorization: 
                'Client-ID n241BNALe7SWu0SJpsLLybzhB6LAP7rGgD_QS5RGWgU'
            }
        });
        console.log(response.data.results);
    }

    render(){
        return(
        <div className = 'ui container' style = {{marginTop: '10px'}}>
            <SearchBar onSubmit = {this.onSearchSubmit}/>
        </div>
        );
    }
}

export default App;