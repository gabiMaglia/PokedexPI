const normalizeError = (error) => {
    return { message: error.message, code: error.code, timestamp: Date.now()};
  };