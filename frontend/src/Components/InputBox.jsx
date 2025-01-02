import React, {useState} from 'react'

const InputBox = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };


  return (
    <div>
        <input type="text" value={value} onChange={handleChange} placeholder="Enter Text" className="border-2 border-s-black"/>
    </div>
  )
}

export default InputBox