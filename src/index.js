import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';


const data = {
  posts: [
    { id: 1, likes: 10, message: 'Привет всем фронтендерам!' },
    { id: 2, likes: 2, message: 'react cool' },
    { id: 3, likes: 8, message: 'Переносим данные' }
  ],

  dialogs: [
    { name: "Димон", id: 1 },
    { name: "Игорь", id: 2 },
    { name: "Артём", id: 3 },
    { name: "Саша", id: 4 },
    { name: "Андрей", id: 5 },
  ],

  messages: [
    { id: 1, message: 'Привет!' },
    { id: 2, message: 'Здаров ! как ты?' },
    { id: 3, message: 'Чё делаешь?' },
    { id: 4, message: 'Вот и я всенм пирвет!' },
    { id: 5, message: 'И тебе не хворать =)' },
  ],
}

const { posts, dialogs, messages } = data;

ReactDOM.render(
  <React.StrictMode>
    <App
      posts={posts}
      dialogs={dialogs}
      messages={messages}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
