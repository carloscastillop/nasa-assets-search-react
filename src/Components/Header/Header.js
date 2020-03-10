import React from 'react';
import Navbar from '../Navbar/Navbar';
import Form from '../Form/Form';

import './Header.scss';

class Header extends React.Component {

    render() {
        const {
            search,
            handleChangeSearch,
            handleChangeMediaType,
            mediaTypes,
            handleSubmit,
            formErrors,
            isLoading,
            showResults
        } = this.props
        return (
            <React.Fragment>
                <header className={(isLoading || showResults) ? 'spaceEffect pb-3' : 'fullHeight spaceEffect'}>
                    <div className='stars'></div>
                    <div className='twinkling'></div>
                    <Navbar/>
                    <Form
                        search={search}
                        mediaTypes={mediaTypes}
                        handleChangeSearch={handleChangeSearch}
                        handleChangeMediaType={handleChangeMediaType}
                        handleSubmit={handleSubmit}
                        formErrors={formErrors}
                    />
                </header>
            </React.Fragment>
        );
    }
}

export default Header;
