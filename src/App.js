import React from "react";
import Header from "./componets/Header";
import Inputs from "./componets/Inputs";
import Outputs from "./componets/Outputs";
import memesArray from "./Memes_data"





export default function App(){
    const memesRandomNumber = Math.floor(Math.random() * memesArray.length)
    const [meme,setMeme] = React.useState(memesArray[memesRandomNumber])
    return(
        <div>
            <Header />
            <div className="body">
                <Inputs chMeme={() => setMeme(memesArray[Math.floor(Math.random() * memesArray.length)])} />
                <Outputs img={meme.img} />
            </div>
        </div>
    )
}

