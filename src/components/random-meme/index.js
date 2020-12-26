import React from "react";
import { RandomMemeDivContainer, RandomMemeImg, RandomMemeButton } from "./style";

const RandomMeme = () => {
    const [meme, setMeme] = React.useState({ data: [] }); 
        React.useEffect(() => {
            fetch('https://meme-api.herokuapp.com/gimme')
        .then(response => response.json())
        .then(data => setMeme({data: data}))
        }, []);

        const GenerateRandomMeme = () => {
            fetch('https://meme-api.herokuapp.com/gimme')
            .then(response => response.json())
            .then(data => setMeme({data: data}))
        };
        console.log(meme)
  return (
    <div>
        <RandomMemeDivContainer>
            <RandomMemeImg src={`${meme.data.url}`} onClick={() => window.location.href= `${meme.data.postLink}`} />
            <RandomMemeButton onClick={GenerateRandomMeme}>Generate</RandomMemeButton>
         </RandomMemeDivContainer>
    </div>
  )
};

export default RandomMeme;
