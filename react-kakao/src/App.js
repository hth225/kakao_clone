import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { chatRoomInfoList } from './mock.data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ChatList>
          {chatRoomInfoList.map((chatRoomInfo, index) => {
            const { roomName, previewMessage, recentHistory, roomImage, messageCount } = chatRoomInfo;
            return <ChatRoom roomName={roomName}
              previewMessage={previewMessage}
              recentHistory={recentHistory}
              messageCount={messageCount}
              roomImage={roomImage}
              key={index} />
          })}
        </ChatList>
        <Footer/>
        <FloatActionButton/>
      </div>
    );
  }
}

const Header = _ => {
  return (
    <header className="header">
      <span className="header__edit">Edit</span>
      <h2 className="header__title">Chats  <i className="fal fa-angle-down"></i></h2>
    </header>
  );
}

const ChatList = ({ children }) => {
  return (
    <section className="chats">
      {children}
    </section>
  )
}

const ChatRoom = ({ roomName, previewMessage, recentHistory, messageCount }) => {
  const hasMessageCount = !!messageCount;
  return (
    <div className="chat">
      <img src="http://www.mbcsportsplus.com/images/img.php?srv=1&type=a&src=/2018/02/20180202144833_tlsqdkde.jpg" alt="" className="chat__avatar" />
      <div className="chat__text">
        <span className="chat__username">{roomName}</span>
        <span className="chat__preview">{previewMessage}</span>
      </div>
      <div className="chat__number">
        <span className="chat__date">{recentHistory}</span>
        {hasMessageCount ? <span className="message-num">{messageCount}</span> : ''}
      </div>
    </div>
  );
}

const Footer = _ => {
  return (
    <footer className="footer">
      <div className="footer__icon">
        <i className="fa fa-user fa-2x"></i>
        <span className="footer__text">Friends</span>
      </div>
      <div className="footer__icon footer__icon--selected">
        <i className="fa fa-comment fa-2x"></i>
        <span className="footer__text">Chats</span>
      </div>
      <div className="footer__icon">
        <i className="fa fa-book fa-2x"></i>
        <span className="footer__text">Channel</span>
      </div>
      <div className="footer__icon">
        <i className="fa fa-ellipsis-h fa-lg"></i>
        <span className="footer__text">More</span>
      </div>
    </footer>)
}

const FloatActionButton = _ => {
return(
  <div className="fab">
    <div className="action-btn" id= "actionBtn">
      <i className="fa fa-comment fa-lg"></i>
    </div>
    <div className="action-btn action-btn-notYellow" id= "lockBtn">
      <i className="fa fa-lock fa-lg"></i>
    </div>
  </div>
  )
}

export default App;
