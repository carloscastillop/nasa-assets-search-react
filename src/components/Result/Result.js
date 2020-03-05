import React from 'react';

class Result extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-6 col-md-4 col-lg-3 mb-4">
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
            </React.Fragment>
        );
    }
}
export default Result;