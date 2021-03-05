import React from "react";
import getMemes from "../../actions/getMemes";
import Loader from '../loader/index';
import { RandomMemeDivContainer, RandomMemeImg, RandomMemeButton } from "./style";

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
                    <RandomMemeImg src={`${meme.imageUrl}`} onClick={() => window.location.href = `${meme.url}`} />
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
