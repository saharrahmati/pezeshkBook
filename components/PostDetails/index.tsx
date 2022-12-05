import React,{useState} from "react";
import {DetailsType} from './types.d'
import SkeltonLoading from '../UI/SkeletonLoading'
import classes from './index.module.scss'
import LikeCounter from './_component/LikePost'
import DisLikeCounter from "./_component/DislikePost";
import axios from "axios";
import {BaseUrl2,Token} from '../../pages/api/config'


const Details : React.FC <DetailsType> = ({getPostDetails,id,isLoading,title,content,is_favourited,thumbnail_url,rate,favorite_count}) => {
    
    const [Like,setLike] = useState(favorite_count)

    const handleLike = () => {
        axios.post( `${BaseUrl2}/${id}/like`,{entity:favorite_count+1},{headers: {Authorization: `Bearer ${Token}`}}
        ).then((res)=>{
            const count = res.data.entity
            setLike(count)
        }).catch((err)=>{
            console.log('err',err)
        })
    }    
    const handleDisLike =() => {
            axios.post( `${BaseUrl2}/${id}/dislike`,{entity: Like - 1},{headers: {Authorization: `Bearer ${Token}`}}
            ).then((res)=>{
                setLike(Like -1 )
            }).catch((err)=>{
                console.log('err',err)
            })
    }
    return(
        <>
            {isLoading ? <SkeltonLoading height={300} width={300} circle /> : 
            <div className={classes.MainBox}>
                <div className={classes.TitleDetails}>
                    <div>{title}</div>
                    <div className={classes.Details}>
                        <div>rate:{rate}</div>
                        <LikeCounter Like={Like} handleLike={handleLike}/>
                        <DisLikeCounter handleDisLike={handleDisLike} />
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