import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import Contact from './Contact';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <Navbar />
                </header>

                <main className="container">
                    <Routes>
                        <Route exact path='/' element={ <Home /> } />
                        <Route exact path='/contact' element={ <Contact /> } />
                    </Routes>
                </main>

                <footer>

                </footer>
            </React.Fragment>
        )
    }
}

export default Main;