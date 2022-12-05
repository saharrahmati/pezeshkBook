import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Details from "../../components/PostDetails";
import {DetailsType} from "../../components/PostDetails/types.d"
import axios , {Token} from "../../axios";

function PostDetailsContainer () {
    const router = useRouter()
    const [postDetails, setPostDetails] = useState< DetailsType >()
    const [isLoading, setIsLoading]= useState(false)
    
    const {postId} = router.query
    const id = postId

    const getPostDetails = () => {
        setIsLoading(true)
        axios.get(`/posts/${id}`,{  headers: {Authorization: `Bearer ${Token}`}}).then((res)=>{
            setPostDetails(res.data.entity.post)
            setIsLoading(false)
        }).catch(()=>setIsLoading(false))
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
                favorite_count={postDetails?.favorite_count}
                rate={postDetails?.rate}
                thumbnail_url={postDetails?.thumbnail_url}
                is_favourited={postDetails.is_favourited}
                isLoading={isLoading}
                id={postDetails?.id}
            />}
        </>
    )
}

export default PostDetailsContainer