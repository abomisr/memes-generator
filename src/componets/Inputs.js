import React from 'react'
export default function Inputs(props){
    const [memeData,setMemeData] = React.useState({questionText:"",answerText:""})


    console.log(memeData)

    function handleChange(event){
        setMemeData(prevData=>({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }

    return(
        <div className="inputs-container">
            <div className="inputs">
                <input onChange={handleChange} className="in-question" type="text" placeholder="The Question" name='questionText' value={memeData.questionText} />
                <input onChange={handleChange} className="in-answer" type="text" placeholder="The comic Answer" name='answerText' value={memeData.answerText} />
            </div>
            <button onClick={props.chMeme}>Get a new MEME</button>
        </div>
    )
}
