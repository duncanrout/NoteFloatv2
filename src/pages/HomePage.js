import React from 'react';
import './HomePage.css';

export const HomePage = (props) => (
    
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1>Welcome to NoteFloat!</h1>
                <p>Be notified when it is ready!</p>
            </div>
        </div>

        <header class="masthead text-white text-center">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-9 mx-auto">
                        <h1 class="mb-5">Build a landing page for your business or project and generate more leads!</h1>
                    </div>
                    <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
                        <form>
                            <div class="form-row">
                                <div class="col-12 col-md-9 mb-2 mb-md-0">
                                    <input type="email" class="form-control form-control-lg" placeholder="Enter your email..."></input>
                                </div>
                                <div class="col-12 col-md-3">
                                    <button type="submit" class="btn btn-block btn-lg btn-dark">Send it!</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    </body>

    

)