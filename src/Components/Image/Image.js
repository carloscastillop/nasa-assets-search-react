import React from 'react';
import ModalImage from "react-modal-image";
import './Image.scss';

class Image extends React.Component {
    render() {
        const {asset, title} = this.props;
        return (
            <div className="fancyImageContainer text-center">
                <ModalImage
                    small={asset}
                    large={asset}
                    alt={title}
                />
            </div>
        );
    };
}

export default Image;