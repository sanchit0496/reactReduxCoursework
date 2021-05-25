import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Accordion = (props) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }




    const renderedItems = props.items.map((item, index) => {
        
        let eclass = "";
        if(index === activeIndex){
            eclass = " active";
        }else{
            eclass = "";
        }
        
        return(
            <React.Fragment key = {item.title}>
                <div 
                className = {`title + ${eclass}`}
                onClick = {() => onTitleClick(index)}
                >
                    <i className = 'dropdown icon'></i>
                    {item.title}
                </div>
                <div className= {`content + ${eclass}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })
    return <div className = 'ui styled accordion'>
        {renderedItems}
    </div>
}

export default Accordion;