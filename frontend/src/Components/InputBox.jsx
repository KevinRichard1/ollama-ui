import React, {useState} from 'react'

const InputBox = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };


  return (
    <div>
        <input type="text" value={value} onChange={handleChange} placeholder="Enter Text" className="border-2 border-s-black h-[4vh] w-[30vw] rounded-full mb-4"/>
        <button className="ml-4 bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded">Send</button>
    </div>
  )
}

export default InputBox