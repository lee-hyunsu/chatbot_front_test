import React from "react";
import {Typography} from 'antd';
import Chatbot from './Chatbot/Chatbot';
import {SiInstagram} from "react-icons/si";

const {Title} = Typography;

function App() {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
        <Title level={2} ><SiInstagram />&nbsp;Insta Chatbot</Title>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Chatbot />
      </div>
    </div>
  )
}

export default App;
