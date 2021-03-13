import React from 'react';
import {Typography} from 'antd';
//import { Link } from 'react-router-dom';
import MainChatbot from '../Chatbot/MainChatbot';
import { Link, BrowserRouter, Route } from "react-router-dom"
import name from './Test'

const {Title} = Typography;
function Locate(params) {
    return (
        <div style={{height: 700, width: 700,
            border: '3px solid blue', borderRadius: '7px', display: 'flex',
            flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>

            <div className="title" style={{textAlign: 'center'}}>
                <Title level={1}>Instagram Chatbot</Title>
            </div>

            <Link to="/">
                <button className="collection" color="secondary" style={{}}>
                    <Title level={1} >Collection</Title>
                </button>
            </Link>

            <Link to="/name">
                <button className="chatbot">
                    <Title level={1} >Chatbot</Title>
                </button>
            </Link>

            <Link to="/login">
                <button className="login">
                    <Title level={1} >Login/Logout</Title>
                </button>
            </Link>

        </div>
    )
}
function Main(){
    return(
        //전체 속성 설정.
        <BrowserRouter>
        <div style={{display:'flex'}}>

        <div>머리입니다 머리머리머림ㄴ야러ㅑㅣㅁㅈ롲ㅁ야논ㅁ야ㅣ;ㄹ오ㅑㅣㅗㄴㄴ</div>
        <Route exact path="/login" component={MainChatbot}/> 
        <Route exact path="/" component={Locate}/>   
        <Route exact path="/name" component={name}/>   
        <div>발발발바ㅓ립러ㅣㅂ러ㅣㅑㅗ힝ㅁ노 힌ㅁ옿 ㅐㅑ;ㅁ옪 ;ㅣ</div>
        </div>


        </BrowserRouter>
    )
}

export default Main;