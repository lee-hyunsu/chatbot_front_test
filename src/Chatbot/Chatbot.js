import React from 'react';
import Map from '../Map/MapContent';

function Chatbot() {

    const enterHandler = (e) => {
        if(e.key === "Enter") {
            if(!e.target.value) {
                return alert("입력되지 않았습니다.")
            }

            e.target.value = "";
        }
    }

    return (
        <div>
                <div style={{height: 700, width: 700,
                     border: '3px solid black', borderRadius: '7px'}}>
        
                <div style={{height: 644, width: '100%', overflow: 'auto', 
                     //backgroundColor: 'white', 
                     borderRadius: '4px'}}>
                </div>

                <input style={{
                    margin: 0, width: '100%', height: 50,
                    borderRadius: '4px', padding: '5px', fontSize: '1rem'
                }} placeholder="챗봇에게 메시지를 보내보세요." type="text"
                    onKeyPress={enterHandler}/>

                </div>

            <Map />
        </div>
    )
    
}

export default Chatbot;