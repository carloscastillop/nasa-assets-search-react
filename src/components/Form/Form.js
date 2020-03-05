import React from 'react';
import './Form.scss';

class Form extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="searchForm">
                    <div className="text-center text-white">
                        <div className="col-md-5 p-lg-6 mx-auto">
                            <h2 className="display-4 font-weight-normal text-uppercase animated fadeInUp delay-2s">
                                Nasa
                            </h2>
                            <h1 className="h4 animated fadeIn delay-3s mb-4">
                                Space search
                            </h1>
                            <form className="animated fadeIn delay-4s">
                                <div className="input-group input-group-lg mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Explore the deep space"
                                        aria-label="Explore the deep space"
                                        aria-describedby="button-addon2"
                                    />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary" type="button"
                                                    id="button-addon2">
                                                <i className="fas fa-search"></i> Search
                                            </button>
                                        </div>

                                </div>
                                <small id="emailHelp" className="form-text text-muted  mb-3">
                                    <i className="fas fa-rocket"></i> Earth is a small town with many neighborhoods in a very big universe.
                                </small>

                                <div className="mediaType">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                               value="option1"/>
                                            <label className="form-check-label" htmlFor="inlineCheckbox1">
                                                Image
                                            </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                                               value="option2"/>
                                            <label className="form-check-label" htmlFor="inlineCheckbox2">
                                                Video
                                            </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3"
                                               value="option3"/>
                                            <label className="form-check-label" htmlFor="inlineCheckbox3">
                                                Audio
                                                </label>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Form;