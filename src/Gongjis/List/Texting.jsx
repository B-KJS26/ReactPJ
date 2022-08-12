import React, { useState } from 'react';

export default function Texting() {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onReset = () => {
        setText('');
    };

    return (
        <div className='texting'>
            <input className='inputing' onChange={onChange} value={text}  />
        </div>
    );
}