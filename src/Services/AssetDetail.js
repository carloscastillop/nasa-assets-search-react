import Company from '../Api/Company';

const parseAsset = (data) => {
    return data[0].href;
}

const getAssetDetail = (id) => {
    const apiUrl = 'https://images-api.nasa.gov/asset/' + id;

    return Company(apiUrl, true)
        .get(apiUrl,
            {
                headers: {'Content-Type': 'multipart/form-data'}
            }
        )
        .then(response => {
            return parseAsset(response.data.collection.items);
        });
};

export default getAssetDetail;