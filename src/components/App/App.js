import React from 'react';
import ErrorBoundary from '../../ErrorBoundary';
import './App.scss';
import Header from '../Header/Header';

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            test: true
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <ErrorBoundary>
                <div className="App">

                    <Header/>
                    <section>
                        <div className="container">
                            <div className="results">
                                <div className="row d-none">
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="card">
                                            <img src="https://via.placeholder.com/640x480" className="card-img-top"
                                                 alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">Some quick example text to build on the card
                                                    title
                                                    and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="card">
                                            <img src="https://via.placeholder.com/640x480" className="card-img-top"
                                                 alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">Some quick example text to build on the card
                                                    title
                                                    and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="card">
                                            <img src="https://via.placeholder.com/640x480" className="card-img-top"
                                                 alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">Some quick example text to build on the card
                                                    title
                                                    and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="card">
                                            <img src="https://via.placeholder.com/640x480" className="card-img-top"
                                                 alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">Some quick example text to build on the card
                                                    title
                                                    and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer>
                        <div className="container">
                            <div className="row">
                                <div className="col-auto">
                                    <a className="navbar-brand" href="#">
                                        <img
                                            src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
                                            alt="Nasa Logo"
                                        />
                                    </a>
                                </div>
                                <div className="col">
                                    <p className="text-right">images.nasa.gov API</p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </ErrorBoundary>
        );
    }
}

export default App;
