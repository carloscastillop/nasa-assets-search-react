import React from 'react';
import Result from '../Result/Result';

class Results extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div className="results">
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