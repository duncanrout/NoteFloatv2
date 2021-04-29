import React, { useRef, useState } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//Page and Component imports
import { AboutPage } from './pages/AboutPage';
import { NoMatch } from './components/NoMatch';
import { NavigationBar } from './components/NavigationBar';
import { RegisterPage } from './pages/RegisterPage';
import { ChatForm } from './pages/ChatForm';

//Firebase Package
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    //hidden config
})

const auth = firebase.auth();
const firestore = firebase.firestore();
//const analytics = firebase.analytics();

//Main App
function App() {

        return (
            <Router>
                <NavigationBar />
                <div className="App">
                    <div id="page-body">
                        <Switch>
                            <Route path="/" exact>
                            <HomePage />
                            </Route>
                            <Route path="/about" component={AboutPage} />
                            <Route path="/chatform" component={ChatForm} />
                            <Route path="/register" component={RegisterPage} />
                            <Route path="/chat">
                                <ChatPage />
                            </Route>
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
}

//ChatPage
function ChatPage() {

    const [user] = useAuthState(auth);
    return <div>
        <div class="d-flex" id="wrapper">
            <div class="bg-light border-right" id="sidebar-wrapper">
                <div class="sidebar-heading">Chats </div>
                <div class="list-group list-group-flush">
                    <a href="#" class="list-group-item list-group-item-action bg-light">Chat1</a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">Chat2</a>
                    <SignOut href="#" class="list-group-item list-group-item-action bg-light">Comp</SignOut>
                </div>
            </div>
            <div id="page-content-wrapper">
                <div class="container-fluid">
                    <h1 class="mt-4">Chat</h1>
                    <section1>
                        {user ? <ChatRoom /> : <SignIn />}
                    </section1>
                    
                </div>
            </div>
        </div>
    </div>
}

//HomePage
function HomePage() {

    const [user] = useAuthState(auth);
    return <div>
        <body>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1>Welcome to NoteFloat!</h1>
                    <p>Use Google to Sign in!</p>
                </div>
            </div>
           
            <header class="masthead text-white text-center">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
                            <div class="form-row">
                                {user ? <SignOut /> : <SignIn />}  
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </body>
    </div>
}

//Email component aken from HomePage
/*<div class="form-row">
    <div class="col-12 col-md-9 mb-2 mb-md-0">
        <input type="email" class="form-control form-control-lg" placeholder="Enter your email..."></input>
           </div>
               <div class="col-12 col-md-3">
               <button type="submit" class="btn btn-block btn-lg btn-dark">Send it!</button>
           </div>
 */

//Firebase Functions
function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        //<button type="submit" class="btn btn-block btn-lg btn-dark">Send it!</button>
        <button onClick={signInWithGoogle} type="submit" class="btn btn-block btn-lg btn-dark">Sign in with Google</button>
    )
}

function SignOut() {
    return auth.currentUser && (
        <button onClick={() => auth.signOut()} type="submit" class="btn btn-block btn-lg btn-dark">Sign Out</button>
    )
}

function ChatRoom() {
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' });

    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
        //prevent refresh
        e.preventDefault()

        const { uid, photoURL } = auth.currentUser;

        //creates new document to firestore database
        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('');
    }

    return (
        <>
            <div>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
            </div>
            <div class="form-row"> 
                <div class="col-12 col-md-9 mb-2 mb-md-0">
                    <input value={formValue} onChange={(e) => setFormValue(e.target.value)} class="form-control form-control-lg" placeholder="Say hello!" />
                </div>
                <form class="col-12 col-md-3" onSubmit={sendMessage}>
                    <button type="submit" class="btn btn-block btn-lg btn-dark"> Send </button>
                </form>
            </div>
        </>
    )
}



function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
            <p>{text}</p>
        </div>
    )
}


export default App;
