import Item from "./Item";

export default function ItemList({foodData}){
    return <div>
        {(foodData.extendedIngredients && foodData.extendedIngredients.map)?foodData.extendedIngredients.map(
            (item)=>
            <Item item={item} />
        ):"loading"}
    </div>
}