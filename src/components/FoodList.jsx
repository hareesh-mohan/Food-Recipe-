import FoodItem from "./FoodItem";

export default function FoodList({setFoodId,foodData}){

    return <div>
        {foodData.map((food)=><FoodItem setFoodId={setFoodId} food={food}/>)}
    </div>
}