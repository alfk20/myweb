import React from "react";
import firebase from "firebase";
import {
  Button,
  Image,
  Divider,
  Header,
  Icon,
  Grid,
  Input,
  Menu, Segment
} from "semantic-ui-react";

import Comments from "./comments.js";
import Buttons from "./buttons.js";
import auth from "./fb.js";

import space from "./space.jpeg";

var provider = new firebase.auth.GoogleAuthProvider();

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      userName : "visitor"
    }
  }

state = { activeItem: 'home'}
handleItemClick = (e, { name }) => this.setState({ activeItem: name})

  render() {
    const { activeItem } = this.state

    return (
      <div style={{ backgroundColor: "SlateGray" }}>
        <h2 style={{ textAlign: "center", paddingTop: "10px" }}>
        {" "}
        GOMWEB {" "}
        </h2>

        <Segment style={{ backgroundColor: "LightSlateGray" }}>
        <Menu pointing secondary widths={3}>
          <Menu.Item
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          >
          home </Menu.Item>
          <Menu.Item> {`반가워요,  ${this.state.userName}님.`} </Menu.Item>
          <Menu.Item
          active={activeItem === 'login'}
          onClick={() => {
             firebase
               .auth()
               .signInWithPopup(provider)
               .then(function (result) {
                 // This gives you a Google Access Token. You can use it to access the Google API.
                 var token = result.credential.accessToken;
                 // The signed-in user info.
                 var user = result.user;
                 return user.displayName;
                 // ...
               })
               .then((result) => this.setState({ userName: result }))
               .catch(function (error) {
                 // Handle Errors here.
                 var errorCode = error.code;
                 var errorMessage = error.message;
                 // The email of the user's account used.
                 var email = error.email;
                 // The firebase.auth.AuthCredential type that was used.
                 var credential = error.credential;
                 // ...
               });
           }}
          >
          login
          </Menu.Item>
        </Menu>
        </Segment>

        <Grid centered>
          <Grid.Row>
            <Image src={space} centered size="large" />
          </Grid.Row>
          <Grid.Row>
            <Buttons />
          </Grid.Row>
        </Grid>
        <br />

        <Divider horizontal>
          <Header as="h4">
          </Header>
        </Divider>

        <Comments/>

        <div>
            <Button
              circular
              color="facebook"
              icon="facebook"
              floated='right'
              onClick={() => alert("준비중")}
            />
            <Button
              circular
              color="twitter"
              icon="twitter"
              floated='right'
              onClick={() => window.open("https://www.twitter.com/")}
            />
            <Button
              circular
              color="instagram"
              icon="instagram"
              floated='right'
              onClick={() => window.open("https://www.instagram.com/")}
            />
            <Button
              circular
              color="youtube"
              icon="youtube"
              floated='right'
              onClick={() => window.open("https://www.youtube.com/")}
            />
        </div>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

export default App;
