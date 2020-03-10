import Company from '../Api/Company';

const parseAsset = (data, mediaType) => {
    console.log({data:data, mediaType:mediaType})
}

const getAssetDetail = (id, mediaType ) => {
    const apiUrl = 'https://images-api.nasa.gov/asset/' + id;

    return Company(apiUrl, true)
        .get(apiUrl,
            {
                headers: {'Content-Type': 'multipart/form-data'}
            }
        )
        .then(response => {
            parseAsset(response.data, mediaType);
        });
};

export default getAssetDetail;