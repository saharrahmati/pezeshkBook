import React,{useState} from "react";
import { Like } from '../../types.d'


const LikeCounter : React.FC <Like> = ({Like,handleLike}) => {
    return(
        <>
            <div>
                <button onClick={handleLike}>
                    <img src="Like.png" alt="like"/>
                    <span>{Like}</span>
                </button>
               
            </div>
        </>
    )
}


export default LikeCounter