// Importacion
/* eslint no-eval: 0 */
import React, {useState} from "react";
import words from "lodash.words";
import Functions from "./componets/Functions";
import MathOperations from "./componets/MathOperations";
import Numbers from "./componets/Numbers";
import Result from "./componets/Result"
import './App.css'
import Footer from "./componets/footer/Footer";

// Geneacion de la funcion del componente
const App = () =>{
    const [stack, setStack] = useState ("");

    const items = words(stack, /[^-^+^*^/]+/g)
    // es simila a un if
    // (esVerdadero) ? (resultadoPorVedadero) : (resultadoPorFalso)
    const value = items.length > 0 ? items.length-1 : "0";

    return (
    
    <main className='react-calculator'>
      <div>Calculadora</div>
        <Result value={items[items.length-1]}/>
        <Numbers onClicNumber={number => {
          //   console.log("number")
             setStack (`${stack}${number}`)
        }}/> 

        <Functions
            onContentClear={()=>{
            //   console.log("Content Clear")
               setStack("")
            }}   
            onDelete={()=> {
             if (stack.length > 0){  
               const newStack = stack.substring(0, stack.length - 1)
               console.log("OnDelete")      
               setStack(newStack)
             }
            }}
        />
        
        <MathOperations
            onClickOpeations={operation => {
            // console.log("Operacion: ", operation)
                setStack(`${stack}${operation}`)
            }}
            onClickEqual={equal => {
          // console.log("Operacion: ", equal)
                setStack(eval(stack).toString())
            }}
          />
         <Footer/>
    </main>)
    
}
        
// Exportacion
export default App