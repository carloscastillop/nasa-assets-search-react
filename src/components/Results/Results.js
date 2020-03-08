import React from 'react';
import Result from '../Result/Result';
import Checkbox from '../Checkbox/Checkbox';

class Results extends React.Component {
    render() {
        const {search, assets, mediaTypeFilters} = this.props;
        return (
            <React.Fragment>
                <div className="results py-3">
                    <h3 className="h4 text-white">
                        Results for <strong>{search}</strong> {mediaTypeFilters.toString()}
                    </h3>
                    {
                        (mediaTypeFilters && mediaTypeFilters.length > 1) &&
                        <div>
                            Filters:
                            {
                                mediaTypeFilters.map(function (name) {
                                    return <Checkbox name={name} label={name}/>
                                })
                            }
                        </div>
                    }

                    <div className="row">
                        {
                            assets.map(asset => (
                                <Result asset={asset} mediaTypeFilters={mediaTypeFilters}/>
                            ))
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Results;