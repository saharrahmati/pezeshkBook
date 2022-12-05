import React,{useState} from "react";
import {DetailsType} from './types.d'
import SkeltonLoading from '../UI/SkeletonLoading'
import classes from './index.module.scss'
import LikeCounter from './_component/LikePost'
import DisLikeCounter from "./_component/DislikePost";
import axios from "axios";
import {BaseUrl2,Token} from '../../pages/api/config'
import Image from "next/image"


const Details : React.FC <DetailsType> = ({getPostDetails,id,isLoading,title,content,is_favourited,thumbnail_url,rate,favorite_count}) => {
    
    const [like,setLike] = useState(favorite_count)
    const [showDisLike,setShowDisLike] = useState(is_favourited)
    const [likeLoading,setLikeLoading] = useState(false)
    const [disLikeLoading,setDisLikeLoading] = useState(false)

    const handleLike = () => {
        setLikeLoading(true)
        axios.post( `${BaseUrl2}/${id}/like`,{entity:favorite_count+1},{headers: {Authorization: `Bearer ${Token}`}}
        ).then((res)=>{
            const count = res.data.entity
            setLike(count)
            setShowDisLike(is_favourited)
            setLikeLoading(false)
        }).catch((error)=>{
            if(!error.response.data.is_success){
                alert(error.response.data.message)
            }
            setLikeLoading(false)
        })
    }    
    const handleDisLike =() => {
            setDisLikeLoading(true)
            axios.post( `${BaseUrl2}/${id}/dislike`,{entity: like - 1},{headers: {Authorization: `Bearer ${Token}`}}
            ).then((res)=>{
                setLike(like -1 )
                setShowDisLike(!is_favourited)
                setDisLikeLoading(false)
            }).catch((err)=>{
                console.log('err',err)
                setDisLikeLoading(false)
            })
    }
    return(
        <>
            {isLoading ? <SkeltonLoading height={300} width={300} circle /> : 
            <div className={classes.MainBox}>
                <div className={classes.TitleDetails}>
                    <div>{title}</div>
                    <div className={classes.Details}>
                        <div className={classes.rate}>
                            <Image
                                src="/rate.svg"
                                alt="Picture of the author"
                                width={30}
                                height={30}
                            />
                            <span>{rate}</span>
                        </div>
                        <LikeCounter Like={like} handleLike={handleLike} likeLoading={likeLoading}/>
                        {showDisLike ? <DisLikeCounter disLikeLoading={disLikeLoading} handleDisLike={handleDisLike} />: null}
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