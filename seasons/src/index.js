import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner.js';

class App extends React.Component{

    state = {lat: null, errorMessage: ""};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition((position) => 
            this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        );        
    }

    componentDidUpdate(){
        console.log("did update");
    }

    render(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat = {this.state.lat}/>
        }        
        if(!this.state.errorMessage && !this.state.lat){
            return <Spinner message = "kindly enter"/>
        }
    }

}


ReactDOM.render(<App />, document.getElementById('root'));