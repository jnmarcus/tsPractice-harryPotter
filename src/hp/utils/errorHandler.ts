function errorHandler<E>(error: E): string {
  console.error('OOPS', error);
  return JSON.stringify(error);
}

export default errorHandler;