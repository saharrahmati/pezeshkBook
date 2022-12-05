import React,{useState} from "react";
import { Like } from '../../types.d'
import Image from 'next/image'
import classes from "./index.module.scss";


const LikeCounter : React.FC <Like> = ({Like,handleLike}) => {
    return(
        <>
            <div className={classes.LikeBox}>
                <span>{Like}</span>
                <button className={classes.LikeBtn} onClick={handleLike}>
                    <Image
                        src="/Like.svg"
                        alt="Picture of the author"
                        width={30}
                        height={30}
                    />
                </button>
               
            </div>
        </>
    )
}


export default LikeCounter