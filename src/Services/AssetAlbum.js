import Company from '../Api/Company';

const getAssetAlbum = (id) => {
    const apiUrl = 'https://images-api.nasa.gov/search?nasa_id=' + id;

    return Company(apiUrl, true)
        .get(apiUrl,
            {
                headers: {'Content-Type': 'multipart/form-data'}
            }
        )
        .then(response => {
            if(response.data.collection.items){
                return response.data.collection.items[0].data[0];
            }
        });
};

export default getAssetAlbum;