## Acknowledgements

- ***
-     INITIAL INSTALLATION
- ***

* visit: console.firebase.google.com
* create project (skip google analytics)
* Register app (create config)
* install firebase: npm install firebase
* add config file to your project
* DANGER: Do not publish or make firebase config to public by pushing to github

- ***
-       INTEGRATION
- ***

- Visit: Go to Docs > Build > Authentication > Web > Get Started
- export app from the firebase.config.js file: export default app
- Login.jsx: import getAuth from firebase/auth
- create const auth = getAuth(app)
- ***
          PROVIDER SETUP
- ***
- import googleAuthProvider and create a new provider
- use signInWithPopUp and pass auth and provider
- activate sign-in method (google, facebook, github, etc.)
- [vite]: change 127.0.0.1 to localhost

- ***
          More Auth Provider
- ***

- activate the auth provider (create app, provide redirect url, client id, client secret)
