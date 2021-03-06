import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import ErrorBoundary from '../../ErrorBoundary';
import Header from '../Header/Header';
import Results from '../Results/Results';
import Footer from '../Footer/Footer';
import Search from '../../Services/Search';
import Nextpage from '../../Services/Nextpage';
import Asset from "../Asset/Asset";

import './App.scss';


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            search: '',
            searchTitle: '',
            mediaTypes: ['image', 'video', 'audio'],
            mediaTypeFilters: [],
            formErrors: false,
            isLoading: false,
            isLoadingNext: false,
            showResults: false,
            nextPage: null,
            assets: [],
        }
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.handleChangeMediaType = this.handleChangeMediaType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNextPage = this.handleNextPage.bind(this);
    }

    handleChangeSearch = (event) => {
        this.setState({search: event.target.value, formErrors: false});
    }

    handleChangeMediaType = (event) => {
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

    handleSubmit = (event) => {
        const {search, mediaTypes} = this.state;
        const showResults = false;
        event.preventDefault();
        if (search === '') {
            const formErrors = true;
            return this.setState({
                formErrors,
                showResults
            });
        }
        this.setState({isLoading: true});
        Search(search, mediaTypes.toString())
            .then(res => {
                const assets = res.collection.items;
                const nextPage = this.getNextPage(res.collection.links);
                const isLoading = false;
                const showResults = true;
                const searchTitle = search;
                const mediaTypeFilters = mediaTypes;
                this.setState({
                    assets,
                    isLoading,
                    showResults,
                    searchTitle,
                    mediaTypeFilters,
                    nextPage
                });
            });
    }

    getNextPage = (Links) => {
        let nextPage = null;
        if (!Links) return;
        Links.forEach(link => {
            if (link.rel === 'next') {
                nextPage = link.href;
            }
        });
        return nextPage;
    }

    handleNextPage = () => {
        const {nextPage, assets} = this.state;
        this.setState({isLoadingNext: true});
        Nextpage(nextPage)
            .then(res => {
                const nextAssets = res.collection.items;
                const nextPage = this.getNextPage(res.collection.links);
                const isLoadingNext = false;
                const newAssets = [
                    ...assets,
                    ...nextAssets
                ];
                this.setState({
                    assets: newAssets,
                    isLoadingNext: isLoadingNext,
                    nextPage: nextPage
                });
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
            mediaTypeFilters,
            nextPage,
            isLoadingNext
        } = this.state;

        return (
            <ErrorBoundary>
                <div className="App">
                    <Router basename="/nasa-assets-search-react">
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
                                <section className="shadowTop">
                                    {
                                        isLoading &&
                                        <div className="text-center p-5 animated fadeIn h-100 text-white">
                                            <i className="fas fa-rocket fa-spin fa-3x"></i>
                                        </div>
                                    }

                                    {
                                        (showResults && !isLoading) &&
                                        <div className="container">
                                            <Results
                                                assets={assets}
                                                search={searchTitle}
                                                mediaTypeFilters={mediaTypeFilters}
                                                nextPage={nextPage}
                                                handleNextPage={this.handleNextPage}
                                                isLoadingNext={isLoadingNext}
                                            />
                                        </div>
                                    }

                                    {
                                        (!isLoading && showResults && assets && assets.length === 0) &&
                                        <div className="text-center p-3 animated fadeInUp">
                                            <h3 className="text-white">
                                                <i className="fas fa-user-astronaut fa-3x"></i> Sorry, no results.
                                            </h3>
                                        </div>
                                    }

                                </section>
                            </Route>
                            <Route exact path="/asset/:id"
                                   render={(props) => {
                                       return (
                                           <React.Fragment>
                                               <Asset
                                                   id={props.match.params.id}
                                               />
                                               <div className="container py-3">
                                                   <Link
                                                       className="btn btn-primary"
                                                       to="/"
                                                   >
                                                       <i className="fas fa-chevron-left"></i> Back
                                                   </Link>
                                               </div>
                                           </React.Fragment>
                                       )
                                   }}/>
                        </Switch>
                        <Footer/>
                    </Router>
                </div>
            </ErrorBoundary>
        );
    }
}

export default App;
