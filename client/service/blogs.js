import { fetcher } from "./api";


export const getBlogs = () =>
    fetcher('/blogs', {
        method: 'GET',
    })


export const getBlogsById = (id) =>
    fetcher(`/blogs/${id}`, {
        method: 'GET',
    })


export const postBlogs = ({title, description, blocks}) =>
    fetcher('/blogs', {
        method: 'POST',
        body: JSON.stringify({title, description, blocks})
    })