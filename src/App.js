import React from 'react';
import {Button, Image, Divider, Header, Icon, Grid} from 'semantic-ui-react'

import Comments from './comments.js'

import space from "./space.jpeg"

function App() {
  return (
    <div>
  <Image src = {space} centered size='large' />
  <div>
    <Button
      content='Like'
      icon='heart'
      label={{ as: 'a', basic: true, content: '2,048' }}
      labelPosition='right'
    />
  </div>
  <Divider horizontal>
<Header as='h4'>
  <Icon name='comment alternate outline' />
  cmnts
</Header>
</Divider>

  <Comments />
  <br/>
<div>
<Grid centered>
<Button circular color='facebook' icon='facebook' />
<Button circular color='twitter' icon='twitter' />
<Button circular color='instagram' icon='instagram' />
<Button circular color='youtube' icon='youtube' />
</Grid>
</div>
  </div>
  );
}

export default App;
