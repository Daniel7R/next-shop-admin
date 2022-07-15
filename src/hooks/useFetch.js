import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endPoint) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await axios.get(endPoint);

        setData(response.data);
    };

    useEffect(() => {
        try {
            fetchData();
        } catch (e) {
            console.error(e);
        }
    }, [endPoint]);

    return data;
};

export { useFetch };
