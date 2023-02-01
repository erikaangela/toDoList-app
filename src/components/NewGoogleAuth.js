import React from "react";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

import { signIn, signOut } from "../actions";

// script tag added to index.html to connect Google Auth

class NewGoogleAuth extends React.Component {
  /* global google */

  componentDidMount() {
    window.google.accounts.id.initialize({
      client_id:
        "878755791416-577fukk9g6gm0ruspbhhi0crfoh3s8va.apps.googleusercontent.com",
      callback: this.handleCallbackResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        theme: "outline",
        size: "large",
      }
    );
  }

  handleCallbackResponse = (response) => {
    // console.log("Encoded JWT ID token " + response.credential);
    let userObject = jwt_decode(response.credential);

    this.props.signIn(response.credential);
    console.log(this.props);

    // document.getElementById("signInDiv").hidden = true;
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <div id="signInDiv"></div>
        <button onClick={() => this.props.signOut()}>Sign Out</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(NewGoogleAuth);
