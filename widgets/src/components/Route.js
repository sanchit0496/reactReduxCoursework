import React from 'react';

const Route = ({ path, children }) =>{
    if(window.location.pathname === path){
        return children;
    }else{
        return null;
    }
}

export default Route;