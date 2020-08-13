import React from 'react';
import {Button, Input} from 'semantic-ui-react'

function Login2(){

return(
  <div>
  <Input/>
  <Button onClick = { (e) => {
    console.log(e)
    alert(e.target.value)
  } } > log in! </Button>
  </div>

  )
}

class Login extends React.Component{

  render(){
    return(
      <div>
      <Input/>
      <Button onClick = { (e) => {
        console.log(e)
        alert(e.target.value)
      } } > Login </Button>
      </div>
    )
  }
}


function App() {
  return (
    <div>
<p> 안녕하세요</p>
<button> 하이하이 </button>
<Button> 하이하이1 </Button>
<Login/>
    </div>
  );
}

export default App;
