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


    return (
        <div>
            
        </div>
    )
}

export default EditableText
