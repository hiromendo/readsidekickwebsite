"use client";

import { useEffect } from "react";
import {
    isSignInWithEmailLink,
    signInWithEmailLink,
    getAuth,
    onAuthStateChanged,
} from "firebase/auth";
import { initFirebase } from "/Users/hiroshi/ReadSideKickWebsite/readsidekickwebsite/app/firebase";

export default function LoginClient() {
    useEffect(() => {
        // Confirm the link is a sign-in with email link.
        const app = initFirebase();
        const auth = getAuth(app);
        const user = auth.currentUser;
        console.log("user",user)
        console.log("check if this is a signin email link")
        console.log(isSignInWithEmailLink(auth, "http://localhost:3000/login"));

        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                console.log("SIGNED IN")
                console.log("uid",uid);
                // ...
            } else {
                console.log("SIGNED OUT")
                // User is signed out
                // ...
            }
        });


        if (isSignInWithEmailLink(auth, window.location.href)) {
            // Additional state parameters can also be passed via URL.
            // This can be used to continue the user's intended action before triggering
            // the sign-in operation.
            // Get the email if available. This should be available if the user completes
            // the flow on the same device where they started it.
            let email = window.localStorage.getItem('emailForSignIn');
            if (!email) {
                // User opened the link on a different device. To prevent session fixation
                // attacks, ask the user to provide the associated email again. For example:
                email = window.prompt('Please provide your email for confirmation');
            }
            // The client SDK will parse the code from the link for you.
            if (email) {
                signInWithEmailLink(auth, email, window.location.href)
                    .then((result) => {
                        // Clear email from storage.
                        window.localStorage.removeItem('emailForSignIn');
                        // You can access the new user by importing getAdditionalUserInfo
                        // and calling it with result:
                        // getAdditionalUserInfo(result)
                        // You can access the user's profile via:
                        // getAdditionalUserInfo(result)?.profile
                        // You can check if the user is new or existing:
                        // getAdditionalUserInfo(result)?.isNewUser
                    })
                    .catch((error) => {
                        // Some error occurred, you can inspect the code: error.code
                        // Common errors could be invalid email and invalid or expired OTPs.
                    });
            }
        }
    }, []);

    return <div>Login Page</div>;
}
