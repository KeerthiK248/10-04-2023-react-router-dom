import React, { Component } from 'react'

export default class Events extends Component {
    state={age:"22",
        holder:"angularjs"
    }
handleClick=()=>{
    this.setState({
        age:"108",
        holder:"reactjs"
    })
   
}


  render() {
    return (
      <div>
      <h1>Name is :{this.state.holder}</h1>
      <h1>age is :{this.state.age}</h1>
      <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}


