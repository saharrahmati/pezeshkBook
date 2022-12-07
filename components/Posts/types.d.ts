export type Posts = {
    isLoading: boolean
    posts: Array;
    handlePostDetails: (event?: any) => void
}

export type PostType = {
    introduction: string;
    thumbnail_url: string;
    title: string;
    id: number;
}
