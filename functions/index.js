const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.anonSignIn = functions.https.onCall((payload, context) => {
  let createPromise = admin
    .auth()
    .createUser({})
    .then(userRecords => userRecords.uid);
  let addToUserPromise = createPromise.then(userId => {
    return admin
      .database()
      .ref("users")
      .push(userId);
  });
  return Promise.all([createPromise, addToUserPromise]).then(
    results => results[0]
  );
});

exports.addWallet = functions.https.onCall((payload, context) => {
  let newWallet = {
    name: payload.walletName,
    categories: []
  };
  return admin
    .database()
    .ref(`${payload.userId}/portfolio`)
    .push(newWallet)
    .then(result => Object.assign({ id: result.key }, newWallet));
});

exports.addCategory = functions.https.onCall((payload, context) => {
  let newCategory = {
    name: payload.categoryName,
    type: "fixedIncome",
    allocation: "1.00",
    stocks: [{ ticker: "", allocation: "1.00" }]
  };
  return admin
    .database()
    .ref(`${payload.userId}/portfolio/${payload.walletId}/categories`)
    .push(newCategory)
    .then(result => Object.assign({ id: result.key }, newCategory));
});
