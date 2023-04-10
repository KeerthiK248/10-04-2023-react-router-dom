import React from 'react'
class StateExample extends React.Component{
	state={
		anu:['s','a','d'],
		obj:{
			name:"anu",
		    age:"22"
		},
		siri:{
			class:"2",
			gender:"f"
		},
		employees:[
				{id:1,name:"emp1,salary:20000"},
				{id:2,name:"emp2,salary:30000"},
				{id:3,name:"emp3,salary:40000"}
		]
	}
	render(){
		console.log(this.state)
		return(
			 <div>
			 	{
			 		this.state.employees.map((p)=>(
			 			<div key={p.id}>
			 				<h1>{p.name}</h1>
			 				<h1>{p.salary}</h1>
			 			</div>
			 		))
			 	}
			 </div>
			)
	}
}
export default StateExample