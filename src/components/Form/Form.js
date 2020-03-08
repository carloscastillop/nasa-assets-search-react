import React from 'react';
import './Form.scss';
import Checkbox from '../Checkbox/Checkbox';
import Quotes from '../Quotes/Quotes';

const mediaTypesCheckboxes = [
    {
        name: 'mediaTypeImage',
        key: 'mediaType1',
        label: 'Image',
        value: 'image'
    },
    {
        name: 'mediaTypeVideo',
        key: 'mediaType2',
        label: 'Video',
        value: 'video'
    },
    {
        name: 'mediaTypeAudio',
        key: 'mediaType3',
        label: 'Audio',
        value: 'audio'
    },
];


class Form extends React.Component {

    render() {
        const {search, handleChangeSearch, handleChangeMediaType, mediaTypes, handleSubmit, formErrors} = this.props;

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
                                        className={formErrors ? 'form-control is-invalid' : 'form-control'}
                                        placeholder="Explore the deep space"
                                        aria-label="Explore the deep space"
                                        aria-describedby="searchBtn"
                                        value={search}
                                        onChange={handleChangeSearch}
                                    />
                                    <div className="input-group-append">
                                        <button
                                            className="btn btn-primary"
                                            type="button"
                                            id="searchBtn"
                                            onClick={handleSubmit}
                                        >
                                            <i className="fas fa-search"></i> <span
                                            className="d-none d-sm-inline-block">Search</span>
                                        </button>
                                    </div>

                                </div>

                                <div className="mediaType mb-3">
                                    {
                                        mediaTypesCheckboxes.map(item => (
                                            <Checkbox
                                                key={item.key}
                                                handleChangeMediaType={handleChangeMediaType}
                                                label={item.label}
                                                name={item.name}
                                                value={item.value}
                                                id={item.key}
                                                isChecked={mediaTypes.includes(item.value)}
                                            />
                                        ))
                                    }
                                </div>
                                <Quotes/>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Form;