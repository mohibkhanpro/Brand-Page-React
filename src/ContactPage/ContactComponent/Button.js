import React from 'react'
import "./Button.css"

const Button = (props,) => {


 
  return (
    <>
      <button {...props} className={`Contact-btn ${props.isoutlin ? 'outline-btn' : ""}`}>
  {props.icon} {props.text}
</button>
    </>
  )
}

export default Button

