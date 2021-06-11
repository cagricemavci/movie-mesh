import React, {useState, useEffect} from 'react';


const useFetch = ({param}) => {

    const API_KEY = "d67321089641af48cd191befebe3f6f6";
    const API_URL = `https://api.themoviedb.org/3/${param}?api_key=${API_KEY}&language=en-US&page=1`;
    
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
       getData();
    }, [API_URL])

    return [data, isLoading, error]
}

export default useFetch
