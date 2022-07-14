const API = process.env.NEXT_PUBLIC_API_URL;

const endPoints = {
    auth: {
        login: `${API}/api/v1/auth/login`,
        profile: `${API}/api/v1/auth/profile`,
    },
    products: {
        getAllProducts: (limit, offset) => `${API}/api/v1/products?limit=${limit}&offset=${offset}`,
        getProduct: (id) => `${API}/api/v1/products/${id}`,
        addProduct: `${API}/api/v1/products`,
        updateProduct: (id) => `${API}/api/v1/products/${id}`,
        deleteProduct: (id) => `${API}/api/v1/products/${id}`,
    },
    users: {
        getAllUsers: `${API}/api/v1/users`,
        userIsAvailable: `${API}/api/v1/users/is-available`,
    },
    categories: {
        getAllCategories: `${API}/api/v1/categories`,
        addCategory: `${API}/api/v1/categories/`,
        getCategoryWithProduct: (id) => `${API}/api/v1/categories/${id}/products`,
        updateCategory: (id) => `${API}/api/v1/categories/${id}`,
    },
    files: {
        addImage: `${API}/api/v1/files/upload`,
        getFile: (filename) => `${API}/api/v1/files/${filename}`,
    },
};

export default endPoints;
