import React from 'react';
import {Button, Comment, Form, Header} from 'semantic-ui-react'

import anon from "./anon-icon.png"

class Comments extends React.Component{

  render(){
    return(<Comment.Group style = {{marginLeft : "600px"}}>
       <Header as='h3' dividing>
         Comments
       </Header>

       <Comment>
         <Comment.Avatar src={anon} />
         <Comment.Content>
           <Comment.Author as='a'>Alien</Comment.Author>
           <Comment.Metadata>
             <div>Today at 5:42PM</div>
           </Comment.Metadata>
           <Comment.Text>How artistic!</Comment.Text>
           <Comment.Actions>
             <Comment.Action>Reply</Comment.Action>
           </Comment.Actions>
         </Comment.Content>
       </Comment>

       <Form reply>
         <Form.TextArea />
         <Button content='Add Reply' labelPosition='left' icon='edit' primary />
       </Form>
     </Comment.Group>)
  }
}

export default Comments
