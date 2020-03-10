import Company from '../Api/Company';

const parseAsset = (data, media_type) => {
    let src = '';
    console.log({parseAsset: data, media_type: media_type})
    if (media_type === 'image') {
        data.map(row => {
            if(row.href.split('.').pop() === 'jpg'){
               return src = row.href;
            }
        })
    } else {
        src = data[0].href;
    }
    return src;
}

const getAssetDetail = (id, media_type) => {
    const apiUrl = 'https://images-api.nasa.gov/asset/' + id;

    return Company(apiUrl, true)
        .get(apiUrl,
            {
                headers: {'Content-Type': 'multipart/form-data'}
            }
        )
        .then(response => {
            return parseAsset(response.data.collection.items, media_type);
        });
};

export default getAssetDetail;