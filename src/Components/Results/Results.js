import React from 'react';
import Result from '../Result/Result';
import Checkbox from '../Checkbox/Checkbox';

class Results extends React.Component {
    render() {
        const {search, assets, mediaTypeFilters, nextPage, handleNextPage, isLoadingNext} = this.props;

        return (
            <React.Fragment>
                <div className="results py-3">
                    <h3 className="h4 text-white resultsTitle mb-4 ">
                        Results for <strong>{search}</strong>
                    </h3>
                    {
                        (mediaTypeFilters && mediaTypeFilters.length > 1) &&
                        <div className="d-none">
                            Filters:
                            {
                                mediaTypeFilters.map((name, index) => {
                                    return <Checkbox key={`filterResults-${index}`} name={name} label={name}/>
                                })
                            }
                        </div>
                    }

                    <div className="row">
                        { assets &&
                            assets.map((asset, index) => (
                                <Result key={`asset-${index}`} asset={asset} mediaTypeFilters={mediaTypeFilters}/>
                            ))
                        }
                    </div>
                    {
                        nextPage &&
                        <div className="text-center py-3">
                            {(isLoadingNext) ? (
                                <div className="text-center py-2 animated fadeIn">
                                    <i className="fas fa-rocket fa-spin fa-2x"></i>
                                </div>
                            ) : (
                                <button
                                    className="btn btn-primary btn-lg animated fadeIn"
                                    onClick={handleNextPage}
                                >
                                    <i className="fas fa-chevron-down"></i> Load more...
                                </button>
                            )
                            }

                        </div>
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default Results;