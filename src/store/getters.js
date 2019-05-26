export default {
  categories: state => state.wallet.categories,
  category: state => id =>
    state.wallet.categories.find(category => category.id === id),
  notification: state => state.notification
};
