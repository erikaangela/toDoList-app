import React from "react";
import { useEffect } from "react";

import jwt_decode from "jwt-decode";

const NewGoogleAuth = () => {
  /* global google */

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token " + response.credential);
    let userObject = jwt_decode(response.credential);
    console.log(userObject);
  }
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id:
        "878755791416-577fukk9g6gm0ruspbhhi0crfoh3s8va.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        theme: "outline",
        size: "large",
      }
    );
  }, []);

  return (
    <div>
      <div id="signInDiv"></div>
    </div>
  );
};

export default NewGoogleAuth;
