import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from "reactstrap";

function FoodMenu({ foodAndBeverages, categoryTitle }) {
  // Filter items based on their category (food or beverage)
  const filteredItems = foodAndBeverages.filter(item => item.category === categoryTitle);

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {categoryTitle} Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {filteredItems.map(item => (
              <Link to={`/menu/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
