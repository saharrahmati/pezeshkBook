import React, {useState} from "react";
import {DisLike} from '../../types.d'


const DisLikeCounter : React.FC <DisLike> = ({handleDisLike}) => {

    return(
        <>
            <div >
                <button onClick={handleDisLike}>
                    <span>DisLike</span>
                </button>
               
            </div>
        </>
    )
}


export default DisLikeCounter