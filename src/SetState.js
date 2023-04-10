import {Component} from 'react'
class SetState extends Component{
	state={
		name:"Javascript from setState",
		age:"2022"
	}
	render(){
		setTimeout(()=>{
			this.setState({
				name:"ReactJS from setState",
				age:"3033"
			})
		},5000)
		return(
			<div>
				<h1>{this.state.name}</h1>
				<h2>{this.state.age}</h2>
			</div>
			)
	}
}
export default SetState