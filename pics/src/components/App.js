import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.js';
import ImageList from './ImageList.js';
class App extends React.Component{

    state = { images: [] };
    //the async to arrow function bro
    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params:{
                query: term
            },
            headers:{
                Authorization: 
                'Client-ID n241BNALe7SWu0SJpsLLybzhB6LAP7rGgD_QS5RGWgU'
            }
        });
        this.setState({ images: response.data.results });
    }

    render(){
        return(
        <div className = 'ui container' style = {{marginTop: '10px'}}>
            <SearchBar onSubmit = {this.onSearchSubmit}/>
            Found: {this.state.images.length} images
            <ImageList images = {this.state.images}/>
        </div>
        );
    }
}

export default App;