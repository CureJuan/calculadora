import React from "react";
import PropTypes from 'prop-types';
import Button from "./Button";

const MathOperations = ({onClickOpeations, onClickEqual}) =>(
    <section className="math-operations">
       <Button text="+" clickHandler={onClickOpeations}/>
       <Button text="-" clickHandler={onClickOpeations}/>
       <Button text="*" clickHandler={onClickOpeations}/>
       <Button text="/" clickHandler={onClickOpeations}/>
       <Button text="=" clickHandler={onClickEqual}/>
    </section>
)

MathOperations.propTypes = {
    onClickOpeations: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}
export default MathOperations
