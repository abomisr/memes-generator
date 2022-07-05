import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Outputs from './componets/Outputs'
import memesArray from "./Memes_data"
import './style.css'



ReactDOM.render(<App />,document.getElementById('root'))


function generatingMeme(){
    // check Inputs Values

    let errorMessage = document.createElement('p')
    errorMessage.style=`color:red;letter-spacing:1.5px`
    errorMessage.textContent= "you should fill 1 field at least."
    if(document.querySelector('.in-question').value === '' && document.querySelector('.in-answer').value === ''){
        if(document.querySelector('.inputs-container button + p') == null){
            document.querySelector('.inputs-container button').after(errorMessage)
        }
    }else{
        if(document.querySelector('.inputs-container button + p')!=null){
            document.querySelector('.inputs-container button + p').style.display='none'
        }
        
        // Generatung
        document.querySelector('.out-question').textContent = document.querySelector('.in-question').value
        document.querySelector('.out-answer').textContent = document.querySelector('.in-answer').value
        document.querySelector('.g-meme').style.display='block'  
    }
}

document.querySelector('.inputs-container button').onclick=()=>{generatingMeme()}
onkeyup=(click)=>{
    if(click.key === 'Enter'){
        generatingMeme()
    }
}
