import React from "react";
import getMemes from "../../actions/getMemes";
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from "@emotion/core";
import { RandomMemeDivContainer, RandomMemeImg, RandomMemeButton } from "./style";

const RandomMeme = () => {
    const [meme, setMeme] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => getMemes({ setMeme, setLoading }), []);

    const override = css`
        position: absolute;
        top: 50%;
        left: 50%;
    `;

    return (
        <div>
            {!loading ? (
                <RandomMemeDivContainer>
                    <RandomMemeImg src={`${meme.url}`} onClick={() => window.location.href = `${meme.postLink}`} />
                    <RandomMemeButton onClick={() => getMemes({ setMeme, setLoading })}>Generate</RandomMemeButton>
                </RandomMemeDivContainer>
            ) : (
                    <div>
                        <ClipLoader
                            color='gold'
                            loading={loading}
                            css={override}
                            size={50}
                        />
                    </div>
                )}
        </div>
    )
};

export default RandomMeme;
