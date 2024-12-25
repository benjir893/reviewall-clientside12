import { useEffect, useState } from "react";
import { data } from "react-router-dom";

const useMenu = ()=>{
    const[menu, setMenu] =useState([])
    const[loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:8000/menu')
        .then(res =>res.json())
        .then(data =>{
            setMenu(data)
            setLoading(false)})
    },[])
    return [menu, loading]

}
export default useMenu;