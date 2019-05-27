export default {
  userId: state => state.userId,
  portfolio: state => state.portfolio,
  wallet: state => id => state.portfolio.find(wallet => wallet.id === id),
  categories: state => walletId => this.wallet(state)(walletId).categories,
  category: state => id =>
    state.wallet.categories.find(category => category.id === id),
  notification: state => state.notification
};
