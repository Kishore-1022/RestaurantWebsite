import React from 'react'
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css'

const MealItem = (props) => {
    const price=`$${props.i.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
        <div>
            <h3>{props.i.name}</h3>
            <div className={classes.description}>{props.i.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm />

        </div>
    </li>
  )
}

export default MealItem