import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://akasa-ad.onrender.com/api', // Base URL for the API
});
// API function to get categories
const getCategory = () => axiosClient.get('/categories?populate=*');

const getSliders = () =>
    axiosClient.get('/sliders?populate=*').then(resp => resp.data.data);

const getCategoryList = () =>
    axiosClient.get('/categories?populate=*').then(resp => resp.data.data);

const getAllItems = () =>
    axiosClient.get('/items?populate=*').then(resp => resp.data.data);

const itemsByCat = (category) =>
    axiosClient.get(`/items?filters[categories][name][$in]=${category}&populate=*`).then(resp => resp.data.data);

const registerUser = (username, email, password) =>
    axiosClient.post('/auth/local/register', {
        username,
        email,
        password
    });

const signin = (email, password) =>
    axiosClient.post('/auth/local', {
        identifier: email, // Correcting the identifier
        password: password  // Use 'password' instead of 'identifier'
    }).then(resp => resp.data); // Extracting the response data


const addtocart = (data, jwt) => axiosClient.post('/user-carts', data, {
    headers: {
        Authorization: 'Bearer ' + jwt,
    },
});
// Exporting the functions for use in other files
export default {
    getCategory,
    getSliders,
    getCategoryList,
    getAllItems,
    itemsByCat,
    registerUser,
    signin,
    addtocart
};
