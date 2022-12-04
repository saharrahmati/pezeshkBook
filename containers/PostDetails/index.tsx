import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Details from "../../components/PostDetails";
import {DetailsType} from "../../components/PostDetails/types.d"
import {BaseUrl2,Token} from '../../pages/api/config'

function PostDetailsContainer () {
    const router = useRouter()
    const [postDetails, setPostDetails] = useState< DetailsType >()
    const [Like, setLike] = useState(0)
    const [isLoading, setIsLoading]= useState(false)
    
    const {postId} = router.query
    const id = postId

    const getPostDetails = () => {
        setIsLoading(true)
        axios.get(`${BaseUrl2}/${id}`,{  headers: {Authorization: `Bearer ${Token}`}}).then((res)=>{
            setPostDetails(res.data.entity.post)
            setLike(res.data.entity.post.favorite_count)
            setIsLoading(false)
        }).catch(()=>setIsLoading(false))
    }

    const postLike = () => {
        axios.post( `${BaseUrl2}/${id}/like`,{entity: Like},{headers: {Authorization: `Bearer ${Token}`}}
        ).then((res)=>{
            const count = res.data.entity
            setLike(count +1 )  
        }).catch((error)=>{
            if (!error.response.data.is_success) {
                alert(error.response.data.message)
              }
        })
 
    }
    useEffect(()=>{
        if(postId){
         getPostDetails()
        }
        
    },[postId])
     
    return(    
        <>
            {postDetails && <Details  
                title={postDetails?.title} 
                content={postDetails?.content} 
                favorite_count={Like} 
                rate={postDetails?.rate} 
                thumbnail_url={postDetails?.thumbnail_url}
                is_favourited={postDetails.is_favourited}  
                isLoading={isLoading}   
                Like={Like} 
                postLike={postLike}
            />}
        </>
    )
}

export default PostDetailsContainer