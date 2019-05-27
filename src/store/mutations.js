import uuidv4 from "uuid/v4";
const getCategory = (wallet, id) => {
  return wallet.categories.find(category => category.id === id);
};

const getWallet = (state, id) => {
  return state.portfolio.find(wallet => wallet.id === id);
};

export default {
  loadPortfolio(state, portfolio) {
    state.portfolio = portfolio;
  },
  addWallet(state, walletObj) {
    state.portfolio.push(walletObj);
  },
  addCategory(state, { walletId, categoryObj }) {
    let wallet = getWallet(state, walletId);
    wallet.categories.push({
      ...categoryObj,
      stocks: [{ ticker: "", allocation: "1.00" }]
    });
  },
  addStock(state, categoryId) {
    let category = getCategory(state, categoryId);
    category.stocks.push({
      id: uuidv4(),
      ticker: "",
      allocation: "1.00"
    });
  },
  removeStock(state, { categoryId, stockId }) {
    let category = getCategory(state, categoryId);
    category.stocks = category.stocks.filter(stock => stock.id !== stockId);
  },
  changeCategoryType(state, { categoryId, type }) {
    let category = getCategory(state, categoryId);
    category.type = type;
  },
  showNotification(state, errorMessage) {
    state.notification.text = errorMessage;
    state.notification.snackbar = true;
  },
  closeNotification(state) {
    state.notification.text = "";
    state.notification.snackbar = false;
  },
  setUser(state, userId) {
    state.userId = userId;
  }
};
