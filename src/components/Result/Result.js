import React from 'react';
import {Link} from "react-router-dom";
import './Result.scss';

class Result extends React.Component {
    truncateText = (str, length = 100, ending = '...') => {
        if(!str) return;
        if (str.length <= length) {
            return str
        }
        // Return str truncated with '...' concatenated to the end of str.
        return str.slice(0, length) + ending
    }

    render() {
        const {asset, mediaTypeFilters} = this.props;
        const links = asset.links[0] ? asset.links[0] : [];
        const data = asset.data[0] ? asset.data[0] : [];
        return (
            <React.Fragment>
                {
                    mediaTypeFilters.includes(data.media_type) &&
                    <div className="col-6 col-md-6 col-lg-4 col-xl-3 mb-4">
                        <div className="card text-white bg-dark h-100">
                            <div className="previewContainer">
                                {
                                    (data.media_type === 'image' || data.media_type === 'video') &&
                                    <img
                                        src={links.href}
                                        className="card-img-top"
                                        alt={data.title}
                                    />
                                }
                                <div className="assetIcon">
                                    {data.media_type === 'image' &&
                                    <i className="far fa-image" title="Image type"></i>}
                                    {data.media_type === 'video' &&
                                    <i className="fas fa-video" title="Video type"></i>}
                                    {data.media_type === 'audio' &&
                                    <i className="fas fa-volume-up" title="Audio type"></i>}
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="title">
                                    <h5 className="card-title">
                                        {this.truncateText(data.title, 30)}
                                    </h5>
                                </div>
                                <p className="card-text">
                                    {this.truncateText(data.description, 120)}
                                </p>
                                <Link to={"/asset/"+data.nasa_id}>View more</Link>
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default Result;