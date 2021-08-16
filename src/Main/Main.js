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
            position: 'absolute', top: '50%', left: '50%', margin: 'auto', position: 'center'}}>

            <div className="title" style={{textAlign: 'center'}}>
                <Title level={1}>Instargram Chatbot</Title>
            </div>
            
                <a href="https://www.instagram.com/">
                    <button 
                        className="collection"  
                        style={{backgroundColor: '#487ef3', border: 'none', 
                                cursor: 'pointer', borderRadius: '4px',
                                padding: '0.25rem 1rem', margin: '1.25rem'}}>
                        <Title level={1} >Collection</Title>
                    </button>
                </a>

                <Link to="/chatbot">
                    <button 
                        className="chatbot" 
                        style={{backgroundColor: '#487ef3', border: 'none', 
                                cursor: 'pointer', borderRadius: '4px',
                                padding: '0.25rem 1rem', margin: '1.25rem'}}>
                        <Title level={1} >Chatbot</Title>
                    </button>
                </Link>

                <a href="https://www.instagram.com/">
                    <button 
                        className="login" 
                        style={{backgroundColor: '#487ef3', border: 'none', 
                                cursor: 'pointer', borderRadius: '4px',
                                padding: '0.25rem 1rem',
                                margin: '1.25rem'}}>
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

// position: 'absolute', left: '0', top: '0', bottom: '0',
//                       right: '0', fontSize: '20px', display: 'block',
//                       paddingBottom: '2rem', textAlign: 'center',
//                       fontWeight: 'bold', letterSpacing: '2px',
//                       boxShadow: '0, 0, 8px rgba'