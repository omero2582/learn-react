import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function formatDate(date) {
  return date;
} 
function Avatar(props) {
  return (
    <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
    />
  );
}

function UserInfo (props) {
  return (
    <div className="UserInfo">
      <Avatar user ={props.user}/>
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user = {props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const sesUrl = 'https://uploads2.yugioh.com/card_images/3500/detail/5385.jpg?1385134497'
root.render(<Comment author={{name: 'ses', avatarUrl: sesUrl }} date= {new Date().toDateString()} text= 'myComment'/>)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
