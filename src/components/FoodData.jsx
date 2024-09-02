import { useEffect, useState } from "react";
import styles from "./fooddata.module.css"
import ItemList from "./ItemList";
export default function FoodData({foodId}){
    const URL =`https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY ="496bfa3600794121beb0bf04e6ef6230";
    const [foodData,setfoodData] = useState({});
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        async function fetchFood()
        {
            const data = await fetch(`${URL}?apiKey=${API_KEY}`);
            const res = await data.json();
            
            console.log(res);
            setfoodData(res);
            setLoading(false);
        }
        fetchFood();
    },[foodId]);
    return <div>

       <div className={styles.recipeCard}>
       <h1 className={styles.recipeName}>{foodData.title}</h1>
       <img className={styles.recipeImage} src={foodData.image}></img>
       <div className={styles.recipeDetails}>
       <span>
        <strong>⌚{foodData.readyInMinutes}</strong>
       </span>
       <span>
        👩‍👧‍👦<strong>Serves{foodData.servings}</strong>
       </span>
       <span>
        <strong>{foodData.vegetarian?"🥕Vegetarian":"🍖Non-vegetarian"}</strong>
       </span>
       <span>
        <strong>{foodData.vegan?"🐮Vegan":""}</strong>
       </span>
       <div>
        <span><strong>💲{(foodData.pricePerServing/100).toFixed(2)}</strong></span>
       </div>
       </div>
       
        <h2>Ingredients</h2>
        <ItemList foodData={foodData}/>
        
       
       <div>
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
            <ol>
        {loading?<p>Loading"</p>:foodData.analyzedInstructions[0].steps.map((food)=>(<li key={food.step}>{food.step}</li>))}
        </ol>
        </div>
       </div>
       </div>
       
       
        

    </div>
}