import React, { useState } from "react"

export const PropsAndState = ({ yourName }) => {
  let [countClicks, setCountClicks] = useState(0)

  const handleClick = () => {
    //good practice:
    //make a copy of state, modify it, and then setState to the copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
  }

  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <p>{countClicks}</p>
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export const CheckBox = () => {
  const [checked, setChecked] = useState(false)

  const checker = () => setChecked(!checked)

  return (
    <>
      <input type="checkbox" name="checkbox" value="yesno" checked={checked} onChange={checker}></input>
    </>
  )
}