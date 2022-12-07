import React from 'react'
import Image from 'next/image'
import classes from './index.module.scss'
import SkeletonLoading from '../UI/SkeletonLoading'
import {Posts, PostType} from './types.d'

const Posts: React.FC<Posts> = ({posts, isLoading, handlePostDetails}) => {
    if (isLoading) {
        return (
            <SkeletonLoading height={300} width={300} circle />
        )
    }

    return (
        <>
            {posts && posts.map((item: PostType) => {
                return (
                    <figure className={classes.MainBox} key={item.id} onClick={() => handlePostDetails(item.id)}>
                        {item.thumbnail_url ?
                            <img loading='lazy' src={item.thumbnail_url} alt={item.title} /> :
                            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
                        }
                        <figcaption className={classes.Caption}>
                            <div>{item.title} </div>
                            <div>{item.introduction}</div>
                        </figcaption>
                    </figure>
                )
            })}
        </>
    )
}

export default Posts
