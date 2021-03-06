let firebase;
import config from './config';

class Firebase {
  constructor() {
    this.firebase = firebase;
  }

  initialize = () => {
    this.firebase.initializeApp(config);
  }

  get auth() {
    return this.firebase.auth();
  }

  get db() {
    return this.firebase.database();
  }
}

export default new Firebase();