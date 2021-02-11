import React from "react";
import getMemes from "../../actions/getMemes";
import ScaleLoader from 'react-spinners/ScaleLoader';
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
                        <ScaleLoader
                            color='gold'
                            loading={loading}
                            css={override}
                            size={20}
                        />
                    </div>
                )}
        </div>
    )
};

export default RandomMeme;
