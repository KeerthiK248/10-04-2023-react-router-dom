
import Events from './Events'
import Event2 from './Event2'
import Input from './Input'
import JSXComponent from './JSXComponent'
import StateExample from './StateExample'
import SetState from './SetState'
import Radio from './Radio'
import Demo,{Demo2} from './Demo'
function App(){
  return(
    <div>
   
   
    <Demo
      subjectName ="Reactjs"
      year="2013"
      message="hello this is react from app.js"

    />
    <Demo
      subjectName ="Angular"
      year="2008"
      message="hello this is angular from app.js"

    />
    
    <SetState/>
    <Event2/>
    <Demo2/>
    <StateExample/>
    <Events/>
    <JSXComponent/>
    <Input/>
    <Radio/>
    <p>Hello world from app .js.</p>
    <p>Hello world from app .js.</p>
   
    </div>

    )
}
export default App