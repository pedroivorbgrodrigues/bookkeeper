const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.putStock = functions.https.onCall((payload, context) => {
  return admin
    .database()
    .ref(`stocks/${payload.stock.ticker}`)
    .set({ ...payload.stock })
    .then(result => result.key);
});
