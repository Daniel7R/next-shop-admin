import axios from "axios";

import endPoints from "@services/api";

const addProduct = async (product) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await axios.post(endPoints.products.addProduct, product, config);

    return response.data;
};

export { addProduct };
