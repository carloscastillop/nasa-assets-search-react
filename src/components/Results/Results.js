import React from 'react';
import Result from '../Result/Result';

class Results extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div className="results">
                    <h3 className="h4 text-white">Results for XXX</h3>
                    <div className="row">
                        <Result/>
                        <Result/>
                        <Result/>
                        <Result/>
                        <Result/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Results;