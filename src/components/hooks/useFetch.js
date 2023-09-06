import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const fetchData = async () => {
            setLoading(true);

            try {
                
                const response = await axios.get(process.env.REACT_APP_API_URL + url, {
                    Autorization:"bearer "+ process.env.REACT_APP_API_TOKEN,
                });
                
                setData(response.data.data);
                setLoading(false);
            }
            catch (error) {
                setLoading(false);
                setError(error);
                console.log(error);
            }

        }
        fetchData();
    }, [url])
    
    return {loading, error, data}
}

export default useFetch