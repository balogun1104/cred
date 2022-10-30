import React from 'react';
import './button.css'

const Button = ({ buttonText, onClick, customClasses, prefix }) => {
  return (
    <div  className={`flex absolute-center button-wrapper ${customClasses}`} onClick={onClick}>
      {prefix} {buttonText}
    </div>
  )
}

export default Button
