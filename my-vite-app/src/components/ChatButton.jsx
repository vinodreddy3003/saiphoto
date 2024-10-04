import React from 'react';
import { Button } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import './ChatButton.css'; // Custom CSS for floating effect

const ChatButton = () => {
  const handleChatClick = () => {
    // Logic to handle chat click, e.g., opening WhatsApp Web or a chat window
    window.open('https://wa.me/9980400473', '_blank');
  };

  return (
    <div className="chat-button">
      <Button
        type="primary"
        shape="circle"
        icon={<WhatsAppOutlined style={{ fontSize: '28px' }} />}  // Adjust fontSize here
        size="large"
        onClick={handleChatClick}
        style={{ 
          backgroundColor: '#25D366', 
          borderColor: '#25D366',
          width: '80px', // Adjust the button size
          height: '80px', // Adjust the button size
        }}
      />
    </div>
  );
};

export default ChatButton;
