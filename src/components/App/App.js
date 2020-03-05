import React from 'react';
import ErrorBoundary from '../../ErrorBoundary';
import './App.scss';
import Header from '../Header/Header';
import Results from '../Results/Results';
import Footer from '../Footer/Footer';


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
                        <div className="container d-none">
                            <Results/>
                        </div>
                    </section>
                    <Footer/>
                </div>
            </ErrorBoundary>
        );
    }
}

export default App;
