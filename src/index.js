import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

let posts = [
	{id: 1, message: 'this is first post', likesCount: 1},
	{id: 2, message: 'this is second post', likesCount: 5},
	{id: 3, message: 'this is third post', likesCount: 8},
]

let dialogs = [
	{id: 1, name: "Ольга"},
	{id: 2, name: "Олег"},
	{id: 3, name: "Дарья"},
	{id: 4, name: "Сергей"},
	{id: 5, name: "Дмитрий"},
]

let messages = [
	{id: 1, message: 'Привет!'},
	{id: 2, message: 'Как дела'},
	{id: 3, message: 'Куда пропал?'},
	{id: 4, message: 'Ку!'},
	{id: 5, message: 'Нормально! А твои?'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={posts} messages={messages} dialogs={dialogs}/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
