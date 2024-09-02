import { useState } from 'react'
import Search from './components/Search'
import FoodList from './components/FoodList';
import Nav from './components/Nav';
import "./App.css";
import Container from './components/Container';
import Innercontainer from './components/Innercontainer';
import FoodData from './components/FoodData';
function App() {
  const [foodData,setfoodData] = useState([]);
  const [foodId,setFoodId] = useState("715415");

  return (
    <div className="App">
      <Nav/>
      <Search foodData={foodData} setfoodData={setfoodData}/>
      <Container>
        <Innercontainer>
        <FoodList setFoodId={setFoodId} foodData={foodData}/>
        </Innercontainer>
      <Innercontainer>
      <FoodData foodId={foodId}/>
      </Innercontainer>
         
        
      </Container>
      
    </div>
  )
}

export default App
