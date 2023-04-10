import React, { Component } from 'react'

export default class Input extends Component {


    state={
        user:"",
        password:""
    }
    handleChange=(e)=>{
        this.setState({
           [e.target.name]:e.target.value
        })
    }
    sendData=()=>
    {
        console.log(this.state.user,this.state.password)
        this.setState({
            user:"Details received"
        })
    }
  render() {
    return (
      <div>
        <input
            value={this.state.user} 
            name="user"
            onChange ={this.handleChange}
            placeholder="enter name" />
            <br></br>
           
     
      
        <input 
            value={this.state.password} 
            name="password"
            onChange ={this.handleChange}
            placeholder="enter password" />
            <br></br>
            <button  onClick={this.sendData}>Submit</button>
            <p>{this.state.user}</p>
            <p>{this.state.password}</p>
     </div>
    )
  }
}

