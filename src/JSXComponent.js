import React from 'react'

export default function 

() {
  //return (
  //  <div>

    //    <h1>Good Afternoon from JSXCOMPONENT</h1>
   // </div>
 // )

 return React.createElement(
    "div",{
        classNmae:"demo",id:"one"},
        React.createElement("h1",null,"Good Afternoon from JSXCOMPONENT2")
    )
}
 

