import React from 'react';
import './Form.scss';

class Form extends React.Component {

    render() {
        const {search, handleChange} = this.props;
        return (
            <React.Fragment>
                <div className="searchForm">
                    <div className="text-center text-white">
                        <div className="col-sm-9 col-md-8 p-lg-6 mx-auto">
                            <h2 className="display-4 font-weight-normal text-uppercase animated fadeIn">
                                Nasa
                            </h2>
                            <h1 className="h4 animated fadeIn mb-4">
                                Space search
                            </h1>
                            <form className="animated fadeIn">
                                <div className="input-group input-group-lg mb-2">
                                    <input
                                        id="searchInput"
                                        type="text"
                                        className="form-control"
                                        placeholder="Explore the deep space"
                                        aria-label="Explore the deep space"
                                        aria-describedby="searchBtn"
                                        value={search}
                                        onChange={handleChange}
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button"
                                                id="searchBtn">
                                            <i className="fas fa-search"></i> Search
                                        </button>
                                    </div>

                                </div>

                                <div className="mediaType mb-3">
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="searchCheckboxImage"
                                            value="image"
                                        />
                                        <label className="form-check-label" htmlFor="searchCheckboxImage">
                                            Image
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="searchCheckboxVideo"
                                            value="video"
                                        />
                                        <label className="form-check-label" htmlFor="searchCheckboxVideo">
                                            Video
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="searchCheckboxAudio"
                                            value="audio"
                                        />
                                        <label className="form-check-label" htmlFor="searchCheckboxAudio">
                                            Audio
                                        </label>
                                    </div>
                                </div>
                                <small id="searchHelp" className="form-text text-muted mb-3">
                                    <i className="fas fa-rocket"></i> Earth is a small town with many neighborhoods in a very big universe.
                                </small>

                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Form;