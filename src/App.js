import React from "react";
import {Typography} from 'antd';
import Chatbot from './Chatbot/Chatbot';
import {AiFillLike} from "react-icons/ai";

const {Title} = Typography;

function App() {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
        <Title level={2} >ChatBot Web&nbsp;<AiFillLike /></Title>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Chatbot />
      </div>
    </div>
  )
}

export default App;
