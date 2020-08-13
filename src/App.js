import React from 'react';
import {Image} from 'semantic-ui-react'

import Comments from './comments.js'

import space from "./space.jpeg"

function App() {
  return (
    <div>
  <Image src = {space} centered size='large' />
  <Comments />
  </div>
  );
}

export default App;
