function initialState() {
  return {
    user: null,
    loading: false,
    error: null,
    wallet: {
      categories: []
    },
    notification: {
      snackbar: false,
      color: "error",
      mode: "",
      xposition: "right",
      yposition: "bottom",
      timeout: 2000,
      text: "Hello, I'm a snackbar"
    }
  };
}
export default initialState;
