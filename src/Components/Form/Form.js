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
    constructor(props) {
        super(props);
        this.searchBtn = React.createRef();
    }
    enterPressed = (e) => {
        const code = e.keyCode || e.which;
        if(code === 13) { //13 is the enter keycode
            e.preventDefault();
            this.searchBtn.current.click();
        }
    }

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
                                        autoFocus
                                        id="searchInput"
                                        type="text"
                                        className={formErrors ? 'form-control is-invalid' : 'form-control'}
                                        placeholder="Explore the deep space"
                                        value={search}
                                        onChange={handleChangeSearch}
                                        onKeyPress={this.enterPressed}

                                    />
                                    <div className="input-group-append">
                                        <button
                                            className="btn btn-primary"
                                            type="button"
                                            onClick={handleSubmit}
                                            ref={this.searchBtn}
                                        >
                                            <i className="fas fa-search"></i> <span
                                            className="d-none d-sm-inline-block">Search</span>
                                        </button>
                                    </div>

                                </div>

                                <div className="mediaType mb-3">
                                    {
                                        mediaTypesCheckboxes.map((item, index) => (
                                            <Checkbox
                                                key={`searchMediatype-${index}`}
                                                handleChangeMediaType={handleChangeMediaType}
                                                label={item.label}
                                                name={item.name}
                                                value={item.value}
                                                id={item.key}
                                                isChecked={(mediaTypes) ? mediaTypes.includes(item.value) : false}
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