import React, {useEffect, useState} from 'react';

const Route = ({ path, children }) =>{

    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    useEffect(() => {
        
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.addEventListener('popstate', onLocationChange);
        }
    }, [])

    if(window.location.pathname === path){
        return children;
    }else{
        return null;
    }
}

export default Route;