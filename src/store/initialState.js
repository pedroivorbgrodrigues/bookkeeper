function initialState() {
  return {
    userId: null,
    loading: false,
    error: null,
    portfolio: [],
    notification: {
      snackbar: false,
      color: "error",
      mode: "",
      xposition: "right",
      yposition: "bottom",
      timeout: 2000,
      text: ""
    }
  };
}
export default initialState;
