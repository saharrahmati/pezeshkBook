import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type loading = {
    height: number; 
    width: number;
    circle:boolean;
 }

function SkeltonLoading (props:loading) {
    return (
        <Skeleton height={props.height} width={props.width} circle={props.circle} />
    )
}

export default SkeltonLoading