import Company from '../Api/Company';

const Search = (search, mediaTypes) => {
    const apiUrl = 'https://images-api.nasa.gov/search';
    let formData = new FormData();
    formData.append('q', search);
    formData.append('media_type', mediaTypes);
    return Company(apiUrl, true)
        .get(apiUrl+`?q=${search}&media_type=${mediaTypes.toString()}`,
            formData,
            {
                headers: {'Content-Type': 'multipart/form-data'}
            }
        )
        .then(response => {
            return response.data;
        });
};

export default Search;