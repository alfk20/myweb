import React from 'react';
import {Button, Input} from 'semantic-ui-react'

function Login(){

return(
  <div>
  <Input/>
  <Button onClick = { () => alert("버튼이 눌림!") } > 로그인!1 </Button>
  </div>

  )
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
