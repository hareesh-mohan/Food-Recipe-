import style from "./fooditem.module.css";
export default function FoodItem({setFoodId,food}){

    return <div className={style.itemContainer}>
        <img className={style.itemImage} src={food.image}></img>
        <div className={style.itemContent}>
            <p className={style.itemName}>{food.title}</p>
        </div>
        <div className={style.buttonCon}>
            <button onClick={()=>{setFoodId(food.id)}} className={style.itemButton}>View Recipe</button>
        </div>
    </div>
}