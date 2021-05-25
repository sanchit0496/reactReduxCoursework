import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Accordion = (props) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = props.items.map((item, index) => {
        return(
            <React.Fragment key = {item.title}>
                <div 
                className = "title active"
                onClick = {() => onTitleClick(index)}
                >
                    <i className = 'dropdown active'></i>
                    {item.title}
                </div>
                <div className="content active">
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })
    return <div className = 'ui styled accordion'>
        {renderedItems}
        <h1>{activeIndex}</h1>
    </div>
}

export default Accordion;