const errorAction = type => error => ({
  type,
  payload: {
    error,
  },
});

export default errorAction;
