import { fetcher } from "./api";


export const getBlogs = () =>
    fetcher('/blogs', {
        method: 'GET',
    })


export const getBlogsById = (id) =>
    fetcher(`/blogs/${id}`, {
        method: 'GET',
    })


export const postBlogs = (formData) =>
    fetcher('/blogs', {
        method: 'POST',
        body: formData
    })

export const editBlogs = ({ id, title, description, blocks }) =>
    fetcher(`/blogs/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description, blocks })
    })

export const deleteBlogs = ({ id }) =>
    fetcher(`/blogs/${id}`, {
        method: 'DELETE',
    })