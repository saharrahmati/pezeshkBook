export type DetailsType = {
    title: string;
    content:string
    favorite_count: number
    rate: number
    thumbnail_url:string
    is_favourited:boolean;
    isLoading:boolean;
    id:number;
    getPostDetails:function
};

export type Like = {
    handleLike:function;
    Like:number
}

export type DisLike = {
    handleDisLike:function
}