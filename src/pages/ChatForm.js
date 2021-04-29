import React from "react";
import './RegisterPage.css';


export const ChatForm = (props) => (

    <div id="Box">
        <div id="Title">
            <h1>Create New Chat</h1>
        </div>

        <div className="form-group">
            <label>What is the class name?</label>
            <input type="email" className="form-control" placeholder="ex: comp363" />
        </div>

        <div className="form-group">
            <label>With who?</label>
            <input type="email" className="form-control" placeholder="ex: Nick Hayward" />
        </div>

        <div className="form-group">
            <label>At what time?</label>
            <input type="email" className="form-control" placeholder="ex: 5:30pm" />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">Create!</button>
        <p className="forgot-password text-right">
            Need <a href="#">help?</a>
        </p>
    </div>
)