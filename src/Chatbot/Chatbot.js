import React from 'react';

function Chatbot() {
    return (
        <div style={{height: 700, width: 700,
                     border: '3px solid black', borderRadius: '7px'}}>
            대화 내용을 입력해주세요...?
        
        <div style={{height: 623, width: '100%', overflow: 'auto'}}>

        </div>

        <input style={{
            margin: 0, width: '100%', height: 50,
            borderRadius: '4px', padding: '5px', fontSize: '1rem'
        }} />

        </div>
    )
}

export default Chatbot;