import React from 'react';
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

function ChatBox() {
    return (
        <div className="ChatBox">
            <Widget />
        </div>
    );
}

export default ChatBox;