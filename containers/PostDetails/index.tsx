import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Details from '../../components/PostDetails'
import {DetailsType} from '../../components/PostDetails/types.d'
import axios, {Token} from '../../axios'
import SkeletonLoading from '../../components/UI/SkeletonLoading'

const PostDetailsContainer = () => {
    const router = useRouter()
    const [postDetails, setPostDetails] = useState<DetailsType>()
    const [isLoading, setIsLoading] = useState(false)

    const {postId} = router.query
    const id = postId

    useEffect(() => {
        if (postId) {
            getPostDetails()
        }
    }, [postId])

    const getPostDetails = () => {
        setIsLoading(true)
        axios.get(`/posts/${id}`, {headers: {Authorization: `Bearer ${Token}`}}).then((res) => {
            setPostDetails(res?.data?.entity?.post)
            setIsLoading(false)
        }).catch(() => setIsLoading(false))
    }

    if (!postDetails) {
        return <SkeletonLoading height={300} width={300} circle />
    }

    return (
        <Details
            title={postDetails?.title}
            content={postDetails?.content}
            favorite_count={postDetails?.favorite_count}
            rate={postDetails?.rate}
            thumbnail_url={postDetails?.thumbnail_url}
            is_favourited={postDetails.is_favourited}
            isLoading={isLoading}
            id={postDetails?.id}
        />
    )
}

export default PostDetailsContainer
