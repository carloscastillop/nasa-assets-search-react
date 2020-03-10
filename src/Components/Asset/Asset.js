import React from 'react';
import moment from "moment";
import getAssetAlbum from "../../Services/AssetAlbum";
import getAssetDetail from "../../Services/AssetDetail";
import Navbar from "../Navbar/Navbar";
import './Asset.scss'
import Video from '../Video/Video';

class Asset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: false,
            id: null,
            mediaType: null,
            description: null,
            title: null,
            keywords: null,
            date_created: null,
            media_type: null,
            asset: null,
            video_preview: null,
            images: []
        }
    }

    componentDidMount = () => {
        const {id} = this.props;
        this.assetDetail(id);
        this.setState({id});

    }

    assetDetail = (id) => {
        getAssetAlbum(id)
            .then(info => {
                console.log({getAssetAlbum: info});
                this.setState({
                    isLoading: false,
                    title: info.data[0].title,
                    description: info.data[0].description,
                    keywords: info.data[0].keywords,
                    date_created: info.data[0].date_created,
                    media_type: info.data[0].media_type,
                    video_preview: info.links[0].href,
                });

                getAssetDetail(id)
                    .then(res => {
                        this.setState({
                            asset: res,
                        });
                    });
            });


    }


    render() {
        const {
            title,
            isLoading,
            description,
            keywords,
            date_created,
            media_type,
            video_preview,
            asset
        } = this.state;
        return (
            <React.Fragment>
                <header className="spaceEffect">
                    <div className='stars'></div>
                    <div className='twinkling'></div>
                    <Navbar/>
                    {
                        !isLoading &&
                        <div className="container textHeader py-3">
                            <h1
                                className="text-white display-4 animated fadeInUp"
                            >
                                {title}
                            </h1>
                        </div>
                    }
                </header>
                {
                    isLoading &&
                    <div className="text-center p-5 animated fadeIn">
                        <i className="fas fa-rocket fa-spin fa-3x"></i>
                    </div>
                }

                {
                    !isLoading &&
                    <React.Fragment>
                        <div className="mediaContainer mb-3">
                            <div className="container">
                                {
                                    (media_type === 'video') &&
                                    <div className="py-4">
                                        <Video
                                            video_preview={video_preview}
                                            video_src={asset}
                                        />
                                    </div>
                                }
                                {
                                    (media_type === 'image') &&
                                    <div className="py-4">
                                        <img
                                            className="img-fluid animated fadeIn"
                                            src={asset}
                                            title={title}
                                            alt={title}
                                        />
                                    </div>
                                }
                                {
                                    (media_type === 'audio') &&
                                    <div className="text-center animated fadeInUp text-white">
                                        <i className="fas fa-volume-up fa-3x" title="Audio type"></i>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="container">

                            {
                                (media_type === 'audio') ? (
                                    <div className="card bg-light mb-3">
                                        <div className="card-body">
                                            <cite title={title}>
                                                {description}
                                            </cite>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-white animated fadeInUp">
                                        {description}
                                    </p>
                                )
                            }

                            <p className="text-white animated fadeIn delay-1s text-muted">
                                {moment(date_created).format("DD/MM/YYYY")}
                            </p>
                            {keywords &&
                            <div>
                                <p className="text-white">
                                    Keywords:
                                    {
                                        keywords.map((keyword, i) => {
                                            return <span
                                                key={'keyword-' + i}
                                                className="badge badge-primary mx-1"
                                                title={keyword}
                                            >
                                                        {keyword}
                                                    </span>
                                        })
                                    }
                                </p>
                            </div>
                            }
                        </div>
                    </React.Fragment>
                }

            </React.Fragment>
        );
    }
}

export default Asset;