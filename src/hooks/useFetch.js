import {useState, useEffect} from 'react'
import { makeRequest } from '../makeRequest'

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    
    useEffect(() => {
        //fetch data from strapi
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await makeRequest.get(url); // send the REACT_APP_API_TOKEN as a header property (Authorization)
                setData(res.data.data)
            } catch (error) {
                setError(true)
            }
            setLoading(false);
        };
        fetchData();        
    }, [url])

    return { data, loading, error};
}

export default useFetch;