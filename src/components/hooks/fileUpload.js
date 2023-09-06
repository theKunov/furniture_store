import axios from "axios";
import { useEffect, useState } from "react";

const useFetchPost = (file) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const fetchData = async () => {
            setLoading(true);
            
            try {  
                const response = axios.post(process.env.REACT_APP_API_URL + 'fileUpload', {
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
    }, [file])
    
    return {loading, error, data}
}

export default useFetchPost