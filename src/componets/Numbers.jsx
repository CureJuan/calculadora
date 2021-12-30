import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const renderButtons = onClicNumber => {

    const renderButton = number => (
        <Button
           key={number}
           text={number.toString()}
           clickHandler={onClicNumber}/>
    )
    return numbers.map(renderButton)
} 
const Numbers = ({ onClicNumber }) => (
    <section className="numbers">
      {
      renderButtons(onClicNumber)
      }
    </section> 
)
Numbers.propTypes ={
    onClicNumber: PropTypes.func.isRequired
}

export default Numbers

