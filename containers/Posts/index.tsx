import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Posts from '../../components/Posts'


function PostsContainer () {
    const [posts,setPosts] = useState([])
    const [isLoading,setIsLoading] = useState(false)

    const router = useRouter()

    const getPosts = ()=>{
        setIsLoading(true);
        axios.get('https://api.fishdelivery.ir/api/v1/posts').then((res)=>{
            setPosts(res.data.entity.posts.data)
            setIsLoading(false);
        }).catch(() => {
            setIsLoading(false);
         })
    }
    const handlePostDetails = (id:number) =>{
        router.push({
          pathname: '/postDetails',
          query: { postId:id },
        })
    }
    useEffect(()=>{
        getPosts()
    },[])
    
    return (
        <>
            <Posts posts={posts} isLoading={isLoading} handlePostDetails={handlePostDetails}/>
        </>
    )
}

export default PostsContainer