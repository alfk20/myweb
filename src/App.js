import React from 'react';
import {Button, Image, Divider, Header, Icon} from 'semantic-ui-react'

import Comments from './comments.js'

import space from "./space.jpeg"

function App() {
  return (
    <div>
  <Image src = {space} centered size='large' />

  <Divider horizontal>
<Header as='h4'>
  <Icon name='comment alternate outline' />
  cmnts
</Header>
</Divider>
  <Comments />
  <div>
  <Button color='facebook'>
    <Icon name='facebook' /> Facebook
  </Button>
  <Button color='twitter'>
    <Icon name='twitter' /> Twitter
  </Button>
  <Button color='instagram'>
    <Icon name='instagram' /> Instagram
  </Button>
  <Button color='youtube'>
    <Icon name='youtube' /> YouTube
  </Button>
</div>
  </div>
  );
}

export default App;
