import firebase from "firebase";

const callFunction = (functionName, payload) => {
  let method = firebase.functions().httpsCallable(functionName);
  return method(payload);
};

export default {
  addWallet({ commit, getters }, walletName) {
    return callFunction("addWallet", {
      userId: getters.userId,
      walletName: walletName
    }).then(result => {
      debugger;
      commit("addWallet", { result });
    });
  },
  addCategory({ commit }, { walletId, categoryName }) {
    return callFunction("addCategory", {
      walletId: walletId,
      categoryName
    }).then(result => {
      debugger;
      commit("addCategory", { walletId, result });
    });
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
    if (!getters.userId) {
      return callFunction("anonSignIn").then(userId => {
        commit("setUser", userId);
      });
    }
    return Promise.resolve();
  },
  fetchUserData({ commit }, user) {
    if (!user) {
      return Promise.resolve();
    }
    return firebase
      .database()
      .ref(`users/${user.uid}/portfolio`)
      .once("value")
      .then(data => {
        let wallets = data.val();
        if (wallets) {
          commit("loadPortfolio", wallets);
        }
      });
  }
};
