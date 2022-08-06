import React, { useState } from 'react';

export default function Texting() {

    return (
        <div className='texting'>
            <input className='inputing' value={text}  />
            <button onClick={onReset}>초기화</button>
        </div>
    );
}
