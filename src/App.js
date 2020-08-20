import React from 'react';
import {Image, Divider, Header, Icon} from 'semantic-ui-react'

import Comments from './comments.js'

import space from "./space.jpeg"

function App() {
  return (
    <div>
  <Image src = {space} centered size='large' />

  <Divider horizontal>
<Header as='h4'>
  <Icon name='tag' />
  Description
</Header>
</Divider>
  <Comments />
  </div>
  );
}

export default App;
