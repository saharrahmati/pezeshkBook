import React from "react";
import {DetailsType} from './types.d'
import SkeltonLoading from '../UI/SkeletonLoading'
import classes from './index.module.scss'


const Details : React.FC <DetailsType> = ({postLike,isLoading,title,content,is_favourited,thumbnail_url,rate,favorite_count}) => {
    return(
        <>
            {isLoading ? <SkeltonLoading height={300} width={300} circle /> : 
            <div className={classes.MainBox}>
                <div className={classes.TitleDetails}>
                    <div>{title}</div>
                    <div className={classes.Details}>
                        <div>rate:{rate}</div>
                        <div className={classes.Like} onClick={postLike}>
                            <img src="Like.png" alt="like"/>
                            <div className={classes.CountLike}>{favorite_count}</div>
                        </div>
                    </div>
                </div>
                <div className={classes.ImgBox}>
                    <img src={thumbnail_url} alt={title} loading="lazy"/>
                </div>
                <div className={classes.Content}>{content}</div>    
            </div>}
        </>
    )
}


export default Details