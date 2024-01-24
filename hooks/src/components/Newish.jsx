import React from 'react' 
import "../App.css" 

export default function Newish({value, dispatch}) {
  return (
    <div className='list'>
        <div style={value.toggle ? {} : {textDecoration: 'line-through'}}>
            {value.toggle ? value.value : "The content is hidden"}
        </div>
        <button onClick={() => {dispatch({
            type : "toggle",
            value : value.id
        })}}>
            {value.toggle ? "Toggle" : "Get back to original"}
        </button>

    </div>
  )
}