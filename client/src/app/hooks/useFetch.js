import React, {useState, useEffect} from 'react';

export const useFetch = (param) => {

    const API_KEY = "d67321089641af48cd191befebe3f6f6";
    const API_URL = `https://api.themoviedb.org/3/${param}?api_key=${API_KEY}&language=en-US&page=1`;
    
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        getData();
    }, [param])

    const getData = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            data.results && setData(data.results);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }
    console.log('inside usefetch', [data, isLoading, error])
    return [data, isLoading, error]
}
