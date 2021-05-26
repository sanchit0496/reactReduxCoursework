import React, {useState, useEffect, useRef} from 'react';


const Dropdown = ({ options, selected, onSelectedChange }) => {

    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        document.body.addEventListener("click",(event) => {
            //contains is used to check if one DOM element already present inside the another one
            if(ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
          },
          { capture: true }
        );
      }, []);

    const renderedOptions = options.map((option) => {

        if(selected.value === option.value){
            return null;
        }

        return(
            <div key = {option.key} 
            className="item"
            onClick = {() => {onSelectedChange(option)}}
            >
                {option.label}
            </div>
        )
    });
    
    return (
        <div ref = {ref} className="ui form">
          <div className="field">
            <label className="label">Select a Color</label>
            <div
            onClick = { () => setOpen(!open) } 
            className= {`ui selection dropdown ${open ? 'visible active' : ''}`}>
              <i className="dropdown icon"></i>
              <div className="text">{selected.label}</div>
              <div className= {`menu ${open? 'visible transition': ''}`}>{renderedOptions}</div>
            </div>
          </div>
        </div>
      );

}



export default Dropdown;