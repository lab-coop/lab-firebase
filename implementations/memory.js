class Auth {
  currentUser = {}
  signInWithEmailAndPassword = (email) => {
    this.currentUser.email = email
  }
}

export default class Firebase {
  authInstance = new Auth()
  auth = () => this.authInstance
}
