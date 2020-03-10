import Company from '../Api/Company';


const parseMediaType = (mediaType) => {
    let typeUrl = 'asset';
    if(mediaType === 'video')
        typeUrl = 'caption';

    return typeUrl

}

const AssetDetail = (id, mediaType) => {
    const mediaTypeUrl = parseMediaType(mediaType);
    const apiUrl = `https://images-api.nasa.gov/asset/${mediaTypeUrl}/${id}`;

    return Company(apiUrl, true)
        .get(apiUrl,
            {
                headers: {'Content-Type': 'multipart/form-data'}
            }
        )
        .then(response => {
            return response.data;
        });
};

export default AssetDetail;