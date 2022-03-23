import logo from './logo.svg';
import './App.css';

//import useState
import React, { useState } from 'react'
import ColorBlock from './colorBlock';
import ColorForm from './colorForm';

function App(){
  //refactor array to be a State value and tie it to a new component colorForm.js
    // let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])
    let [colors, setColors] = useState([""])

    let colorMap = colors.map((color,i)=>{
      return (
        // this is how you send props to the returned component --- color={color(map element)} first color can be named anything so long
        // as its the same in the return component
            <ColorBlock color={color} key={i} />
          )
    })

    //takes a new color as an argument and sets the value of colors, our State array, 
    // to a new array that contains all previous elements of the old array with the new color concatenated at the end
    const addColor = (newColor) => {
      setColors([...colors, newColor])
    }
    
    return (
        <div className="App grid-container">
          {colorMap}
          <ColorForm addColor={addColor} />
        </div>
        
    )
}

export default App;
