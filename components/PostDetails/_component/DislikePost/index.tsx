import React, {useState} from "react";
import {DisLike} from '../../types.d'
import Image from "next/image";
import classes from './index.module.scss'

const DisLikeCounter : React.FC <DisLike> = ({handleDisLike}) => {

    return(
        <>
            <div className={classes.DisLikeBtn}>
                <button onClick={handleDisLike}>
                    <Image
                        src="/dislike.svg"
                        alt="Picture of the author"
                        width={30}
                        height={30}
                    />
                </button>
               
            </div>
        </>
    )
}


export default DisLikeCounter