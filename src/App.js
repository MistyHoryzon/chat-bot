import React, { useState } from "react";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState([
    { sender: "bot", text: "Добрый день! Как я могу вам помочь?" },
  ]);

  const [userMessage, setUserMessage] = useState("");

  const handleSendMessage = () => {
    if (userMessage.trim() === "") return;

    const userMessageObject = { sender: "user", text: userMessage };
    setChatMessages((prevMessages) => [...prevMessages, userMessageObject]);

    setUserMessage("");

    // Имитация ответа бота
    setTimeout(() => {
      const botReply = { sender: "bot", text: "Это пример ответа бота." };
      setChatMessages((prevMessages) => [...prevMessages, botReply]);
    }, 1000);
  };

  return (
    <div className="page-wrapper">
      <header className="header">
        <div className="container">
          <h1>КАМЧАТСКИЙ ГОСУДАРСТВЕННЫЙ ТЕХНИЧЕСКИЙ УНИВЕРСИТЕТ</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#">ПОСТУПАЮЩИМ</a></li>
              <li><a href="#">ОБУЧАЮЩИМСЯ</a></li>
              <li><a href="#">ВЫПУСКНИКАМ</a></li>
              <li><a href="#">СОТРУДНИКАМ</a></li>
              <li><a href="#">КОНТАКТЫ</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="chat-container">
        <div className="chat-header">
          <h2>Чат-бот</h2>
          <div className="bot-info">
            <i className="fas fa-robot"></i>
          </div>
        </div>
        <div className="chat-messages" id="chatMessages">
          {chatMessages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender === "bot" ? "bot-message" : "user-message"}`}>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <textarea
            id="userInput"
            placeholder="Введите ваше сообщение..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          ></textarea>
          <button id="sendButton" onClick={handleSendMessage}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </main>

      <footer className="footer">
        <p>© 2024 Камчатский государственный технический университет</p>
      </footer>
    </div>
  );
}

export default App;
