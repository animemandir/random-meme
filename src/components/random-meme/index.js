import React from "react";
import getMemes from "../../actions/getMemes";
import Loader from '../loader/index';
import {
    RandomMemeDivContainer,
    RandomMemeTitle,
    RandomMemeImg,
    RandomMemeAuthor,
    RandomMemeButton
} from "./style";

const RandomMeme = () => {
    const [meme, setMeme] = React.useState({
        tite: "",
        author: "",
        imageUrl: "",
        url: ""
    });
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => getMemes({ setMeme, setLoading }), []);

    return (
        <div>
            {!loading ? (
                <RandomMemeDivContainer>
                    <RandomMemeTitle>{meme.title}</RandomMemeTitle>
                    <div>
                        <RandomMemeImg src={`${meme.imageUrl}`} onClick={() => window.location.href = `${meme.url}`} />
                    </div>
                    <RandomMemeAuthor>By <span style={{ fontWeight: 'bold', cursor: 'pointer' }} onClick={() => window.location.href = `https://www.reddit.com/user/${meme.author}`}>{meme.author}</span></RandomMemeAuthor>
                    <RandomMemeButton onClick={() => getMemes({ setMeme, setLoading })}>Generate</RandomMemeButton>
                </RandomMemeDivContainer>
            ) : (
                <Loader
                    loading={loading}
                />
            )}
        </div>
    )
};

export default RandomMeme;
