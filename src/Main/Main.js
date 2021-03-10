import React from 'react';
import {Typography} from 'antd';
//import { Link } from 'react-router-dom';
//import MainChatbot from '../Chatbot/MainChatbot';
import { Link, BrowserRouter } from "react-router-dom"

const {Title} = Typography;

function Main(){
    return(
        //전체 속성 설정.
        <BrowserRouter>
        <div style={{height: 700, width: 700,
            border: '3px solid blue', borderRadius: '7px', display: 'flex',
            flexDirection: 'column', justifyContent: 'center' }}>

            <div className="title" style={{textAlign: 'center'}}>
                <Title level={1}>Instagram Chatbot</Title>
            </div>

            <Link to="/">
                <button className="collection" color="primary" style={{}}>
                    <Title level={1} >Collection</Title>
                </button>
            </Link>

            <Link to="../Chatbot/MainChatbot">
                <button className="chatbot">
                    <Title level={1} >Chatbot</Title>
                </button>
            </Link>

            <Link to="/">
                <button className="login">
                    <Title level={1} >Login/Logout</Title>
                </button>
            </Link>

        </div>
        </BrowserRouter>
    )
}

export default Main;