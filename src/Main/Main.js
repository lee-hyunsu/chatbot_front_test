import React from 'react';
import {Typography} from 'antd';

const {Title} = Typography;

function Main(){
    return(
        //전체 속성 설정.
        <div style={{height: 700, width: 700,
            border: '3px solid blue', borderRadius: '7px', display: 'flex',
            flexDirection: 'column', justifyContent: 'center' }}>

            <div className="title" style={{textAlign: 'center'}}>
                <Title level={1}>Instagram Chatbot</Title>
            </div>

            <button className="collection" style={{}}>
                <Title level={1} >Collection</Title>
            </button>

            <button className="chatbot">
                <Title level={1} >Chatbot</Title>
            </button>

            <button className="login">
                <Title level={1} >Login/Logout</Title>
            </button>

        </div>
    )
}

export default Main;