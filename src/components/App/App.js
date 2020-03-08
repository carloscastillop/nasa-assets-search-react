import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import axios from 'axios';
import ErrorBoundary from '../../ErrorBoundary';
import Header from '../Header/Header';
import Results from '../Results/Results';
import Footer from '../Footer/Footer';
import './App.scss';


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            search: '',
            searchTitle: '',
            mediaTypes: ['image', 'video'],
            mediaTypeFilters: [],
            formErrors: false,
            isLoading: false,
            showResults: false,
            assets: [],
        }
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.handleChangeMediaType = this.handleChangeMediaType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    }

    handleChangeSearch(event) {
        this.setState({search: event.target.value, formErrors: false});
    }

    handleChangeMediaType(event) {
        const checkbox = event.target;
        const mediaTypes = this.state.mediaTypes;
        let uniqueMediaTypes = [];

        if (checkbox.checked) {
            mediaTypes.push(checkbox.value);
            uniqueMediaTypes = [...new Set(mediaTypes)];
        } else {
            uniqueMediaTypes = mediaTypes.filter(item => item !== checkbox.value)
        }
        this.setState({mediaTypes: uniqueMediaTypes});
    }

    handleSubmit(event) {
        const {search, mediaTypes, mediaTypeFilters} = this.state;
        const showResults = false;
        event.preventDefault();
        if (search === '') {
            const formErrors = true;
            return this.setState({formErrors, showResults});
        }
        this.setState({isLoading: true});

        axios.get(`https://images-api.nasa.gov/search?q=${search}&media_type=${mediaTypes.toString()}`)
            .then(res => {
                const assets = res.data.collection.items;
                const isLoading = false;
                const showResults = true;
                const searchTitle = search;
                const mediaTypeFilters = mediaTypes;
                this.setState({assets, isLoading, showResults, searchTitle, mediaTypeFilters});
            });
    }

    render() {
        const {
            search,
            mediaTypes,
            formErrors,
            isLoading,
            assets,
            showResults,
            searchTitle,
            mediaTypeFilters
        } = this.state;
        return (
            <ErrorBoundary>
                <div className="App">
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                <Header
                                    search={search}
                                    mediaTypes={mediaTypes}
                                    handleChangeSearch={this.handleChangeSearch}
                                    handleChangeMediaType={this.handleChangeMediaType}
                                    handleSubmit={this.handleSubmit}
                                    formErrors={formErrors}
                                    isLoading={isLoading}
                                    showResults={showResults}
                                />
                                <section className="container">
                                    {
                                        isLoading &&
                                        <div className="text-center p-5">
                                            <i className="fas fa-rocket fa-spin fa-3x"></i>
                                        </div>
                                    }

                                    {
                                        (showResults && !isLoading) &&
                                        <Results
                                            assets={assets}
                                            search={searchTitle}
                                            mediaTypeFilters={mediaTypeFilters}
                                        />
                                    }

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
