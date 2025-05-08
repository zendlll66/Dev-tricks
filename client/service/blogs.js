import { fetcher } from "./api";


export const getBlogs = () =>
    fetcher('/blogs', {
        method: 'GET',
    })