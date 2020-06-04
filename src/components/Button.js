import React from 'react'


const Button=({name, handleFunction})=>{
return(
    
<button className="btn btn-primary justify-content-cente" size="sm" onClick={handleFunction}>{name} </button>

)
}
export default Button;