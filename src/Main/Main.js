import React from 'react';
import {Typography} from 'antd';

const {Title} = Typography;

function Main(){
    return(
        <div style={{height: 700, width: 700,
            border: '3px solid blue', borderRadius: '7px'}}>
            <div className="collection" style={{}}>
                <Title level={1} >Collection</Title>
            </div>
            <div className="chatbot">
                <Title level={1} >Chatbot</Title>
            </div>
            <div className="login">
                <Title level={1} >Login</Title>
            </div>
        </div>
    )
}

export default Main;