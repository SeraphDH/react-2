import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ foodAndBeverages }) {
  // Count the number of food items (snacks)
  const numFoodItems = foodAndBeverages.filter(item => item.category === "food").length;

  // Count the number of drink choices (drinks)
  const numDrinkChoices = foodAndBeverages.filter(item => item.category === "beverage").length;

  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to "Snack or Booze" - Silicon Valley's hotspot for delicious bites and refreshing drinks!
            </h3>
          </CardTitle>
          <p>
            We offer {numFoodItems} food items (snacks) and {numDrinkChoices} drink choices (drinks) on our menu.
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
