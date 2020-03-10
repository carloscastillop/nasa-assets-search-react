import React from 'react';

class Asset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null
        }
    }

    componentDidMount = () => {
        const {id,mediaType, assetDetail} = this.props;
        this.setState({id: id});
        assetDetail(id, mediaType);
    }

    render() {
        return (
            <React.Fragment>
                <h1>Asset</h1>
            </React.Fragment>
        );
    }
}

export default Asset;