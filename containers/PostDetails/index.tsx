import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Details from "../../components/PostDetails";
import {DetailsType} from "../../components/PostDetails/types.d"
import {BaseUrl2,Token} from '../../pages/api/config'


function PostDetailsContainer () {
    const router = useRouter()
    const [postDetails, setPostDetails] = useState< DetailsType >()
    const [isLoading, setIsLoading]= useState(false)
    
    const {postId} = router.query
    const id = postId

    const getPostDetails = () => {
        setIsLoading(true)
        axios.get(`${BaseUrl2}/${id}`,{  headers: {Authorization: `Bearer ${Token}`}}).then((res)=>{
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
                getPostDetails={getPostDetails}
            />}
        </>
    )
}

export default PostDetailsContainer