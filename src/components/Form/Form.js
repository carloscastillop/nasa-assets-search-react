import React from 'react';

class Form extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="searchForm">
                    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                        <div className="col-md-5 p-lg-5 mx-auto my-5">
                            <h2 className="display-4 font-weight-normal">Nasa</h2>
                            <h1>Space assets search</h1>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" className="sr-only">Search bar</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp"/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share
                                        your
                                        email
                                        with anyone else.
                                    </small>
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                   id="customCheck1"/>
                                            <label className="custom-control-label" htmlFor="customCheck1">
                                                Images
                                            </label>
                                        </div>

                                    </div>
                                    <div className="input-group-middle">

                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                   id="customCheck1"/>
                                            <label className="custom-control-label" htmlFor="customCheck1">
                                                Audio
                                            </label>
                                        </div>

                                    </div>

                                    <div className="input-group-prepend">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                   id="customCheck1"/>
                                            <label className="custom-control-label" htmlFor="customCheck1">
                                                Video
                                            </label>
                                        </div>

                                    </div>

                                </div>

                                <button type="submit" className="btn btn-primary">Search in NASA</button>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Form;