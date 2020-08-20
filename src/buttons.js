import React from "react";
import { Button } from "semantic-ui-react";

class Buttons extends React.Component{
  constructor(){
    super()
    this.state = {
      likes : 0,
      share : 0

    }
  }

  render(){
    return (
      <div>
      <Button
        content="like"
        icon="heart"
        label={{
          as: "a",
          basic: true,
          content: this.state.likes,
        }}
        labelPosition="right"
        onClick = {()=>this.setState(prevState => {
            return {likes : prevState.likes + 1}
          })}
      />
      <Button
        icon="share"
        label={{
          as: "a",
          basic: true,
          content: this.state.share,
         }}
        labelPosition="right"
        onClick = {()=>this.setState(prevState => {
            return {share : prevState.share + 1}
          })}
      />
      </div>
    )
  }
}

export default Buttons
