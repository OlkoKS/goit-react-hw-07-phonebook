export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  return alert(payload);
};

export const handleFulfilled = state => {
  state.isLoading = false;
};
