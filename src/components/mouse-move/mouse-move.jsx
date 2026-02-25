import { useState } from "react"


export function MouseMove(){


    const [imgPosition, setImgPosition] = useState({position:null, left:null, top:null })

    function handleMouseMove(e){
        setImgPosition(
            {
                position: 'fixed',
                left: e.clientX + 'px',
                top: e.clientY + 'px'
            }
        )
    }

    return(
        <div onMouseMove={handleMouseMove}>
            <div style={{height:'1000px'}}> Move mouse pointer to test </div>
            <img src="flag.gif" style={imgPosition} width="50" height="50" />
        </div>
    )
}