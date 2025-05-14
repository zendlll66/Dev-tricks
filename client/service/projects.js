import { fetcher } from "./api";

export const getProjects = () =>
    fetcher('/projects', {
        method: 'GET'
    })

export const getProjectsById = (id) =>
    fetcher(`/projects/${id}`, {
        method: 'GET'
    })

export const postProjects = (form) => {
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('description', form.description);
    formData.append('role', form.role);
    formData.append('demo_link', form.demo_link);
    formData.append('github_link', form.github_link);

    const techs = form.techStack
        .split(',')
        .map((t) => t.trim())
        .filter((t) => t);
    formData.append('techStack', JSON.stringify(techs));

    if (form.imageFile) {
        formData.append('image', form.imageFile);
    }

    return fetcher('/projects', {
        method: 'POST',
        body: formData, // ✅ สำคัญ
    });
};


export const editProjects = ({ id, formData }) =>
    fetcher(`/projects/${id}`, {
        method: 'PUT',
        body: formData
    })

export const deleteProjects = ({ id }) =>
    fetcher(`/projects/${id}`, {
        method: 'DELETE'
    })