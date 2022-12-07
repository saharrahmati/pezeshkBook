export type DetailsType = {
    title: string;
    content: string
    favorite_count: number
    rate: number
    thumbnail_url: string
    is_favourited: boolean;
    isLoading: boolean;
    id: number;
};

export type Like = {
    handleLike: () => void;
    Like: number;
    likeLoading: boolean
}

export type DisLike = {
    handleDisLike: () => void
    disLikeLoading: boolean
}
