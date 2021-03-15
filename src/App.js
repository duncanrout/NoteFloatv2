import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import './App.css';
import { NoMatch } from './components/NoMatch';
import { NavigationBar } from './components/NavigationBar';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { ChatPage } from './pages/ChatPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

  
class App extends React.Component {
    render() {
        return (
            <Router>
                <NavigationBar />
                <div className="App">
                    <div id="page-body">
                        <Switch>
                            <Route path="/" component={HomePage} exact />
                            <Route path="/about" component={AboutPage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={RegisterPage} />
                            <Route path="/chat" component={ChatPage} />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
