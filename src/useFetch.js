import React,{useEffect,useState} from 'react'

const useFetch = (url) => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const getData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setCountries(data);
        setLoading(false)
    }

    useEffect(() => {
        getData();
        
    }, [url])
    return  {countries,loading} ;
    
}

export default useFetch
