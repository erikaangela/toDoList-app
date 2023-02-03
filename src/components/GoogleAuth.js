// DEPRECATED, SEE NewGoogleAuth.js

import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

// script tag added to index.html to connect Google Auth

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "878755791416-577fukk9g6gm0ruspbhhi0crfoh3s8va.apps.googleusercontent.com",
          // what we want to access in a user's profile
          scope: "email",
          plugin_name: "todo",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // immediately updates state in store
          this.onAuthChange(this.auth.isSignedIn.get());
          // waits for auth status changes
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // because callback function, set up as arrow so context is bound
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        // do not use parentheses since that will call the functions at render
        <button
          onClick={() => {
            this.auth.signOut();
          }}
          className="ui grey google button"
        >
          <i className="google icon" />
          Sign out
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            this.auth.signIn();
          }}
          className="ui blue google button"
        >
          <i className="google icon" />
          Sign in with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
