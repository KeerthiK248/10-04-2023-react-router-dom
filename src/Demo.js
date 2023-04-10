 
import Componentdemo from './Componentdemo'
 function Demo(props){
	return(
		<div>
		<h1>Name:{props.subjectName}</h1>
		<p>date:{props.year}</p>
		<p>message:{props.message}</p>
		{console.log(props)}
		{
			/*<h1>Hello everyone</h1>
		
		
		<Componentdemo/>*/}
		</div>
		)
}
export default Demo
export function Demo2(){
	return(
		<div>
		<h1>Hello world from demo2 component.</h1>
		</div>

		)
}

