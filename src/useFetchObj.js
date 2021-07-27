import React,{useEffect,useState} from 'react'

const useFetchObj = (url) => {
    const [list, setList] = useState({});
    const [loading, setLoading] = useState(true);
    
    const getData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setList(data);
        setLoading(false)
    }

    useEffect(() => {
        getData();
        
    }, [url])
    return list;
}

export default useFetchObj
