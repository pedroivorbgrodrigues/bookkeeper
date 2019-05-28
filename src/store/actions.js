import firebase from "firebase";

const getUserDB = userId => firebase.firestore().doc(`users/${userId}`);
const getUserWallet = (userId, walletId) =>
  getUserDB(userId)
    .collection("portfolio")
    .doc(walletId);

export default {
  addWallet({ commit, getters }, walletName) {
    let db = getUserDB(getters.user);
    let newWallet = {
      name: walletName
    };
    return db
      .collection("portfolio")
      .add(newWallet)
      .then(docRef => commit("addWallet", { ...newWallet, id: docRef.id }));
  },
  addCategory({ commit, getters }, { walletId, categoryName }) {
    let walletRef = getUserWallet(getters.user, walletId);
    let newCategory = {
      name: categoryName,
      type: "fixedIncome",
      allocation: "1.00",
      stocks: [{ ticker: "", allocation: "1.00" }]
    };
    walletRef
      .collection("categories")
      .add(newCategory)
      .then(docRef => commit("addCategory", { ...newCategory, id: docRef.id }));
  },
  addStock({ commit }, categoryId) {
    commit("addStock", categoryId);
  },
  removeStock({ commit }, payload) {
    commit("removeStock", payload);
  },
  changeCategoryType({ commit }, payload) {
    commit("changeCategoryType", payload);
  },
  showNotification({ commit }, errorMessage) {
    commit("showNotification", errorMessage);
  },
  closeNotification({ commit }) {
    commit("closeNotification");
  },
  autoSignIn({ commit }, user) {
    if (user) {
      commit("setUser", user.uid);
    }
  },
  signIn({ commit, getters }) {
    let currentUser = getters.user;
    if (!currentUser) {
      return firebase
        .auth()
        .signInAnonymously()
        .then(userId => {
          commit("setUser", userId);
        });
    }
    return Promise.resolve();
  },
  fetchUserData(user) {
    if (!user) {
      return Promise.resolve();
    }
    let db = getUserDB(user.uid);
    return db
      .collection("portfolio")
      .get()
      .then(document => {
        console.log(document);
      });
  }
};
