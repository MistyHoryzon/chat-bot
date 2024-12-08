import React, { useState } from 'react';
import './App.css';

function App() {
  const [userMessage, setUserMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    // Заглушки для чата
    { sender: 'bot', text: 'Здравствуйте! Я ваш университетский помощник. Чем могу помочь?' },
    { sender: 'user', text: 'Подскажите, пожалуйста, мое расписание на завтра.' },
    { sender: 'bot', text: 'Завтра у вас 3 пары: Математика в 9:00, Физика в 11:00, Английский в 13:00.' }
  ]);

  const [uploadedFile, setUploadedFile] = useState(null);

  const handleSendMessage = () => {
    if (userMessage.trim() !== '') {
      const newMessage = { sender: 'user', text: userMessage };
      setChatMessages([...chatMessages, newMessage]);
      setUserMessage('');

      // Имитация ответа бота
      setTimeout(() => {
        const botResponse = { sender: 'bot', text: 'Это пример ответа бота.' };
        setChatMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      // Здесь будет логика отправки файла на сервер
    }
  };

  return (
    <div className="app-container">
      <div className="chat-wrapper">
        <h1 className="chat-title">Чат с ботом</h1>
        <div className="chat-messages">
          {chatMessages.map((msg, index) => (
            <div 
              key={index} 
              className={`chat-message ${msg.sender === 'bot' ? 'bot-message' : 'user-message'}`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="chat-controls">
          <div className="input-and-button">
            <input 
              type="text" 
              className="chat-input" 
              placeholder="Ваш вопрос..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            />
            <button className="send-button" onClick={handleSendMessage}>
              Отправить
            </button>
          </div>

          <div className="file-upload-container">
            <label className="file-upload-label">
              Загрузить документ
              <input 
                type="file" 
                className="file-upload-input" 
                onChange={handleFileUpload}
              />
            </label>
            {uploadedFile && <p className="uploaded-file-name">Загружен файл: {uploadedFile.name}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
