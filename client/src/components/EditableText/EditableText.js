import React, { useState, useRef, useEffect } from 'react'
import API from '../../utils/API';

const EditableText = (props) => {
    const inputRef = useRef(null);
    const [inputVisible, setInputVisible] = useState(false);
    const [text, setText] = useState(props.text);

    function onClickOutSide (e){
        //checks if the user is clicking outside of the input
        if (inputRef.current && !inputRef.current.contains(e.target)){
            setInputVisible(false); //Disable text input 
        }
    }
    function handleSave(){
        API.updateActivity(props.currentTheme, text, props.index)
        .then(res => props.loadThemes())
        .catch(err => console.log(err));
      }

    useEffect(() =>{
        if (inputVisible){
            document.addEventListener("mousedown", onClickOutSide); 
            handleSave();
        }
        return () => {
            document.removeEventListener("mousedown", onClickOutSide);
          };
    });


    return (
        <div>
              {inputVisible ? (
                <input
                    ref={inputRef} // Set the Ref
                    value={text} // Now input value uses local state
                    onChange={e => {
                    setText(e.target.value);
                }}
              />
            ) : (
        <span onClick={() => setInputVisible(true)}>{text}</span>
      )}
            
        </div>
    )
}

export default EditableText
