import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import FoodMenu from "./FoodMenu";
import DrinkMenu from "./DrinkMenu"; // Import the component if it doesn't exist
import FoodItem from "./FoodItem";
import AddItemForm from "./AddItemForm"; // Import the new form component

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [foodItems, setFoodItems] = useState([]);
  const [drinkItems, setDrinkItems] = useState([]);

  useEffect(() => {
    async function getFoodAndDrinks() {
      const foodAndDrinks = await SnackOrBoozeApi.getFoodAndDrinks();
      const food = foodAndDrinks.filter(item => item.category === "food");
      const drinks = foodAndDrinks.filter(item => item.category === "beverage");
      setFoodItems(food);
      setDrinkItems(drinks);
      setIsLoading(false);
    }
    getFoodAndDrinks();
  }, []);

  const handleAddItem = async (newItem) => {
    // Send a POST request to your API to add the new item
    // You'll need to implement the API endpoint for adding items
    // You can use axios or fetch for making the POST request
    // After adding the item, you may want to update the state or fetch data again to refresh the item list.
    console.log("Adding a new item:", newItem);
  };

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home foodAndBeverages={foodItems.concat(drinkItems)} />
            </Route>
            <Route exact path="/menu/food">
              <FoodMenu snacks={foodItems} categoryTitle="Food" />
            </Route>
            <Route exact path="/menu/beverage">
              <FoodMenu snacks={drinkItems} categoryTitle="Beverage" />
            </Route>
            <Route exact path="/menu/drinks">
              <DrinkMenu drinks={drinkItems} />
            </Route>
            <Route path="/menu/:id">
              <FoodItem items={foodItems.concat(drinkItems)} cantFind="/menu" />
            </Route>
            <Route exact path="/add-item">
              <AddItemForm onAddItem={handleAddItem} />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
