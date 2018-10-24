import axios from 'axios';

const urlLogin = `/api/login`;
const urlRegister = `/api/register`;
const urlPost = `/api/post`;
const urlContact = `/api/send-email`;
const urlGetPosts = `/api/posts`;
const urlGetPost = `/api/post/`;
const urlCreateComment = `/api/comment`;

export function loginService(email, password) {
    return axios
        .post(urlLogin, {
            email,
            password
        })
        .then(response => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('email', email);
        });
}

export function registerService(email, password) {
    return axios
        .post(urlRegister, {
            email,
            password
        })
        .then(response => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('email', email);
        });
}

export function logoutService() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
}

export function createPostService(title, description, text, image) {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('text', text);
    formData.append('image', image);

    const token = localStorage.getItem('token');

    const headers = {
        'x-access-token': token,
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    const config = {
        headers
    };

    return axios.post(urlPost, formData, config);
}

export function contactService(name, email, message) {
    return axios.post(urlContact, {
        name,
        email,
        message
    });
}

export function getPostsService(page, currentPage, isMinus, isPlus) {
    let curPage = page;

    if (isMinus) {
        curPage = currentPage - 1;
    } else if (isPlus) {
        curPage = currentPage + 1;
    }

    return axios.get(`${urlGetPosts}/${curPage}`);
}

export function getPost(id) {
    return axios.get(urlGetPost + id);
}

export function getAllPostsService() {
    return axios.get(urlGetPosts);
}

export function createCommentService(text, postId) {
    const params = new URLSearchParams();
    params.append('text', text);
    params.append('postId', postId);

    const token = localStorage.getItem('token');

    const headers = {
        'x-access-token': token,
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    const config = {
        headers
    };

    return axios.post(urlCreateComment, params, config);
}
