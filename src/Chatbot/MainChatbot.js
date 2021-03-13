import React from "react";
import {Typography} from 'antd';
//import Chatbot from './Chatbot/Chatbot';
import {SiInstagram} from "react-icons/si";
//import { BrowserRouter, Route } from 'react-router-dom';
//import Main from '../Main/Main';

const {Title} = Typography;
 
function MainChatbot() {
  return (
    
    <div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
        <Title level={2} ><SiInstagram />&nbsp;Instagram Chatbot</Title>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        
      </div>

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
                  />

                </div>
            
        </div>
    </div>
    
  )
}

export default MainChatbot;
