import React from 'react'

const Button=({name, handleFunction})=>{
return(
<button onClick={handleFunction}>{name} </button>
)
}
export default Button;