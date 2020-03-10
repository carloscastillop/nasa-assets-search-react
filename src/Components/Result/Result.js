import React from 'react';
import {Link} from "react-router-dom";
import './Result.scss';
import audioImage from '../../Images/audio-file.jpg';

class Result extends React.Component {

    render() {
        const {asset, mediaTypeFilters} = this.props;
        const data = asset.data[0] ? asset.data[0] : [];
        let links = audioImage;
        if (data.media_type === 'image' || data.media_type === 'video') {
            links = asset.links[0].href;
        }
        return (
            <React.Fragment>
                {
                    mediaTypeFilters.includes(data.media_type) &&
                    <div className="col-6 col-md-6 col-lg-4 col-xl-3 mb-4">
                        <div id={'card-' + data.nasa_id}
                             className="card text-white bg-dark h-100 animated fadeIn noBorder">
                            <div className="previewContainer">
                                <Link
                                    title={data.title}
                                    to={"/asset/" + data.nasa_id}
                                >
                                    <img
                                        src={links}
                                        className="card-img-top"
                                        alt={data.title}
                                    />
                                    <div className="assetIcon">
                                        {data.media_type === 'image' &&
                                        <i className="far fa-image" title="Image type"></i>}
                                        {data.media_type === 'video' &&
                                        <i className="fas fa-video" title="Video type"></i>}
                                        {data.media_type === 'audio' &&
                                        <i className="fas fa-volume-up" title="Audio type"></i>}
                                    </div>
                                </Link>
                            </div>
                            <div className="card-body">
                                <div className="title">
                                    <h5 className="card-title multi-line-truncate line-2">
                                        {data.title}
                                    </h5>
                                </div>
                                <p className="card-text multi-line-truncate line-3">
                                    {data.description}
                                </p>
                            </div>
                            <div className="card-footer text-right">
                                <Link
                                    className="btn btn-outline-info btn-sm"
                                    title={data.title}
                                    to={"/asset/" + data.nasa_id}
                                >
                                    View more
                                </Link>
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default Result;