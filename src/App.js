import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Progress } from 'semantic-ui-react'

function App() {
  return (
    <div>
<p> 안녕하세요</p>
<Button primary> 하이하이1 </Button>
<Progress percent = {66} />    
    </div>
  );
}

export default App;
