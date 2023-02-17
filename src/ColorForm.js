// import { dblClick } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";

function ColorForm(props){
  let [input, setInput] = useState('')

  const handleSubmit = (e) => {
    //eliminating default behavior from our form submital
    e.preventDefault()
    //add color within props
    props.addColor(input)
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"
          onChange={(e) => setInput(e.target.value)} />
          <button type="submit">Submit!</button>
      </form>
    </div>
  )
}
export default ColorForm
