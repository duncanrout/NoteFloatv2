import React from 'react';
import './ChatPage.css';

export const ChatPage = (props) => (
	
    <div>
        <div class="d-flex" id="wrapper">
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">Chats </div>
      <div class="list-group list-group-flush">
        <a href="#" class="list-group-item list-group-item-action bg-light">Hist</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Theo</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Comp</a>
        
      </div>
    </div>

    <div id="page-content-wrapper">

      <div class="container-fluid">
        <h1 class="mt-4">Chat</h1>
        <p>Blah Blah Blah</p>
        
      </div>
    </div>
    </div>
   </div>
)


