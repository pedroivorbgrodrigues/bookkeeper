import uuidv4 from "uuid/v4";
const getCategory = (state, id) => {
  return state.wallet.categories.find(category => category.id === id);
};

export default {
  addCategory(state, categoryName) {
    state.wallet.categories.push({
      id: uuidv4(),
      name: categoryName,
      type: "fixedIncome",
      allocation: "1.00",
      stocks: [{ id: uuidv4(), ticker: "", allocation: "1.00" }]
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
  }
};
