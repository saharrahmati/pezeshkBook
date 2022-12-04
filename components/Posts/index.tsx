import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import classes from './index.module.scss'
import SkeltonLoading from '../UI/SkeletonLoading'
import { useRouter } from 'next/router'



type Posts = {
    introduction: string; 
    thumbnail_url: string;
    title:string;
    id: number;
 }

function Posts () {
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
         {isLoading ? <SkeltonLoading height={300} width={300} circle/>:
            posts && posts.map((item : Posts , index)=>{
                return (<figure className={classes.MainBox} key={item.id} onClick={()=>handlePostDetails(item.id)}>                    
                    <>
                        {item.thumbnail_url ? <img loading="lazy" src={item.thumbnail_url} alt={item.title}/> : <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />}
                    <figcaption className={classes.Caption}>
                        <div>{item.title} </div>
                        <div>{item.introduction}</div>
                    </figcaption> 
                    </>  
                </figure>)
            })}
        </>
    )
}

export default Posts