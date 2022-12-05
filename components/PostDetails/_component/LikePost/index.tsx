import React,{useState} from "react";
import { Like } from '../../types.d'
import Image from 'next/image'
import classes from "./index.module.scss";
import CircleLoader from '../../../UI/CircleLoader'

const LikeCounter : React.FC <Like> = ({Like,handleLike,likeLoading}) => {
    return(
        <>
            <div className={classes.LikeBox}>
                {likeLoading ? <CircleLoader />: 
                <>
                    <span>{Like}</span>
                    <button className={classes.LikeBtn} onClick={handleLike}>
                        <Image
                            src="/Like.svg"
                            alt="Picture of the author"
                            width={25}
                            height={25}
                        />
                    </button>
                </>
                }
            </div>
        </>
    )
}


export default LikeCounter