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
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
