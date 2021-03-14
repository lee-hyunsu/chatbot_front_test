import React from 'react';
import {Typography} from 'antd';
//import { Link } from 'react-router-dom';
import MainChatbot from '../Chatbot/MainChatbot';
import { Link, BrowserRouter, Route } from "react-router-dom"
import Login from '../Login/Login';

const {Title} = Typography;
function Locate(params) {
    return (
        <div style={{height: 700, width: 700,
            border: '3px solid blue', borderRadius: '7px', display: 'flex',
            flexDirection: 'column', justifyContent: 'center', textAlign: 'center',
            top: '50%', left: '50%', margin: 'auto' }}>

            <div className="title" style={{textAlign: 'center'}}>
                <Title level={1}>Instagram Chatbot</Title>
            </div>
            
                <a href="https://www.instagram.com/">
                    <button 
                        className="collection"  
                        style={{backgroundColor: 'gray', border: 'none', 
                                cursor: 'pointer'}}>
                        <Title level={1} >Collection</Title>
                    </button>
                </a>

                <Link to="/chatbot">
                    <button 
                        className="chatbot" 
                        style={{backgroundColor: 'gray', border: 'none', 
                                cursor: 'pointer'}}>
                        <Title level={1} >Chatbot</Title>
                    </button>
                </Link>

                <a href="https://www.instagram.com/">
                    <button 
                        className="login" 
                        style={{backgroundColor: 'gray', border: 'none', 
                                cursor: 'pointer'}}>
                        <Title level={1} >Login/Logout</Title>
                    </button>
                </a>

        </div>
    )
}

function Main(){
    return(
        //전체 속성 설정.
        <BrowserRouter>
            <div style={{display:'flex'}}>
                <Route exact path="/" component={Locate}/>
                <Route exact path="/chatbot" component={MainChatbot}/>
                <Route exact path="/login" component={Login}/> 
                   
            </div>
        </BrowserRouter>
    )
}

export default Main;