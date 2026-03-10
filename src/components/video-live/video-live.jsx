import { useReducer } from "react"

let initialState = {
    likesCounter : 0
}

function reducer(state, action){
     switch(action.type){
         case 'like': 
         return { likesCounter : state.likesCounter + 1 }
         case 'dislike': 
         return { likesCounter : state.likesCounter - 1 }
     }
}

export function VideoLive(){


    const [state, dispatch] = useReducer(reducer, initialState);

    function LikeClick(){
        dispatch({type:'like'});
    }

    function DislikeClick(){
        dispatch({type:'dislike'});
    }

    return(
        <div className="container">
            <h3>React Class</h3>
            <iframe width={400} src='https://www.youtube.com/embed/tjzVhBF0cuY' height={300}></iframe>
            <div>
                <div className="my-2"> {state.likesCounter} Likes</div>
                <button onClick={LikeClick} className="btn bi bi-hand-thumbs-up"> Like</button>
                <button onClick={DislikeClick} className="btn bi bi-hand-thumbs-down"> DisLike</button>
            </div>
        </div>
    )
}