import Company from '../Api/Company';

const Nextpage = (Link) => {
    const apiUrl = Link;
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

export default Nextpage;