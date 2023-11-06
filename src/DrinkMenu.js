import React from "react";
import { Link } from "react-router-dom";
import "./DrinkMenu.css"; // You may create a new CSS file
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function DrinkMenu({ drinks }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Drink Menu
          </CardTitle>
          <ListGroup>
            {drinks.map(drink => (
              <Link to={`/menu/drinks/${drink.id}`} key={drink.id}>
                <ListGroupItem>{drink.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default DrinkMenu;
