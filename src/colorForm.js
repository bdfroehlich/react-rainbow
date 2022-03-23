import React, { useState } from 'react'

function ColorForm(props){
    // instantiate the value of input to a blank string
    // use a State Hook
    // input = variable - preserves values between function calls
    // setInput = function called everytime input is updated
    // useState() = takes the initial state as an argument - returns the current state and the function that updates it
    //https://reactjs.org/docs/hooks-state.html
    let [input, setInput] = useState('')


    const handleSubmit = (e) => {
        // eliminate default behavior of our form submittal to prevent taking user to another page
        e.preventDefault()
        // make addColor function built in App.js available within props
        props.addColor(input);
        //e.target.reset() clears the input field after it is submitted
        e.target.reset();
        
    }

    //form that contains an input field and a button to submit it
    return (
        <div>
            {/* input field call setInput every time the content changes. As the user types, we redefine the value of input */}
            <form onSubmit={handleSubmit}>
                <input type="text" 
                onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm