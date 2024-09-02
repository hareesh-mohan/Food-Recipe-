import { useEffect, useState } from "react"
const URL ="https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "496bfa3600794121beb0bf04e6ef6230";
import styles from "./search.module.css";
export default function Search({foodData,setfoodData})
{
    const [query,setQuery] = useState("");
    useEffect(()=>{
        async function fetchFood()
        {
            const data = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const res = await data.json();
            const answer = res.results;
            console.log(answer);
            setfoodData(answer);
        }
        fetchFood();
    },[query]);
    return <div className={styles.container}>
            <input className={styles.input} onChange={(e)=>{setQuery(e.target.value)}} value={query} type="text"/>
            
    </div>
}