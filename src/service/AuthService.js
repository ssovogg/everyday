import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

class AuthService {
  constructor() {
    this.auth = getAuth();
  }

  createAccount(email, password) {
    createUserWithEmailAndPassword(this.auth, email, password);
  }

  login(email, password) {
    signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    signOut(this.auth);
  }
}

export default AuthService;
