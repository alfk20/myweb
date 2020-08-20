import React from "react";
import { Button, Icon, Comment, Form, Header } from "semantic-ui-react";
import moment from "moment";

import anon from "./anon-icon.png";

function SingleComment(detail) {
  return (
    <Comment>
      <Comment.Avatar src={anon} />
      <Comment.Content>
        <Comment.Author as="a">anon</Comment.Author>
        <Comment.Metadata>
          <div>{detail.info.time}</div>
        </Comment.Metadata>
        <Comment.Text>{detail.info.content}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
}

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      inputContent: "",
      inputTime: "",
      commentsList: [],
    };
  }

  render() {
    console.log(this.state.commentsList);
    return (
      <Comment.Group style={{ marginLeft: "400px" }}>
        <Header as="h4" dividing>
        <Icon name="comment alternate outline" /></Header>

        {this.state.commentsList.map((comments) => (
          <SingleComment info={comments} />
        ))}

        <Form reply>
          <Form.TextArea
            value={this.state.inputContent}
            placeholder="댓글 입력"
            onChange={(e) => this.setState({ inputContent: e.target.value })}
          />
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
            onClick={() => {
              if (this.state.inputContent != "") {
                this.setState((prevState) => {
                  return {
                    commentsList: [
                      ...prevState.commentsList,
                      {
                        content: this.state.inputContent,
                        time: moment().format("YYYY.MM.DD HH:mm"),
                      },
                    ],
                    inputContent: "",
                  };
                });
              } else {
                alert("you forgot to write something!");
              }
            }}
          />
        </Form>
      </Comment.Group>
    );
  }
}

export default Comments;
