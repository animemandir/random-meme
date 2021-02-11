import API from '../api/api';

const getMemes = ({ setMeme, setLoading }) => {
    setLoading(true);
    API.get('/gimme')
        .then(res => {
            setTimeout(() => {
                setMeme(res.data);
                setLoading(false);
            }, 100);

        })
};

export default getMemes;