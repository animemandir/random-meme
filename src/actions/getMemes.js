import API from '../api/api';

const getMemes = ({ setMeme, setLoading }) => {
    setLoading(true);
    API.get('/gimme')
        .then(data => {
            setTimeout(() => {
                setMeme({
                    title: data.data.title,
                    author: data.data.author,
                    imageUrl: data.data.url,
                    url: data.data.postLink
                });
                setLoading(false);
            }, 100);

        })
};

export default getMemes;