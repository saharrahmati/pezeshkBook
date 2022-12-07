import React from 'react'
import {DisLike} from '../../types.d'
import Image from 'next/image'
import classes from './index.module.scss'
import CircleLoader from '../../../UI/CircleLoader'

const DisLikeCounter: React.FC<DisLike> = ({handleDisLike, disLikeLoading}) => {
    return (
        <>
            <div className={classes.DisLikeBtn}>
                {disLikeLoading ? <CircleLoader /> : (
                    <button onClick={handleDisLike}>
                        <Image
                            src='/dislike.svg'
                            alt='Picture of the author'
                            width={25}
                            height={25}
                        />
                    </button>
                )}
            </div>
        </>
    )
}


export default DisLikeCounter
