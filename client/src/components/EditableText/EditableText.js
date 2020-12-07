import React from 'react'

const EditableText = (props) => {
    const inputRef = useRef(null);
    const [inputVisible, setInputVisible] = useState(false);
    const [text, setText] = useState(props.text);

    function onClickOutside(e){
        //checks if the user is clicking outside of the input
        if (inputRef.current && !inputRef.current.contains(e.target)){
            setInputVisible(false); //Disable text input 
        }
    }

    useEffect(() =>{
        if (inputVisible){
            document.addEventListener("mousedown", onClickOutSide); 
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
