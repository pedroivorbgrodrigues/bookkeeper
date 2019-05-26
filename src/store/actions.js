export default {
  addCategory({ commit }, categoryName) {
    commit("addCategory", categoryName);
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
  }
};
