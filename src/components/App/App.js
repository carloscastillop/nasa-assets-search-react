import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import axios from 'axios';
import ErrorBoundary from '../../ErrorBoundary';
import './App.scss';
import Header from '../Header/Header';
import Results from '../Results/Results';
import Footer from '../Footer/Footer';


class App extends React.Component {

    constructor() {
        super()
        this.state = {
            search: '',
            media_type: [],
            assets: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get(`https://images-api.nasa.gov/search?q=apollo%2011&media_type=image`)
            .then(res => {
                const assets = res.data;
                this.setState({assets});
            })
    }

    handleChange(event) {
        this.setState({search: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.search);
        event.preventDefault();
    }

    render() {
        const {search} = this.state;
        return (
            <ErrorBoundary>
                <div className="App">
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                <Header search={search} handleChange={this.handleChange}/>
                                <section>
                                    <div className="container py-5 d-nonex">
                                        <Results/>
                                    </div>
                                </section>
                            </Route>
                            <Route path="/asset">
                                <div className="container">
                                    <h1 className="text-white">ASSET</h1>
                                    <Link to="/">Home</Link>
                                </div>
                            </Route>
                        </Switch>
                        <Footer/>
                    </Router>
                </div>
            </ErrorBoundary>
        );
    }
}

export default App;
