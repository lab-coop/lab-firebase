// @flow

import {expect} from 'chai'
require("babel-polyfill")

export default function () {
  this.When(/^I login with email "([^"]*)" and password "([^"]*)"$/, function (email, password) {
    const firebase = this.container.get('firebase')
    return firebase.auth().signInWithEmailAndPassword(email, password)
  });

  this.Then(/^the signed in user's email should be "([^"]*)"$/, async function (expectedEmail) {
    const {email} = this.container.get('firebase').auth().currentUser
    expect(email).to.equal(expectedEmail)
  });


}
