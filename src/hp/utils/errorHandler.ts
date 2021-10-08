/**
 *
 * @param error
 * @param fromCall the name of the function that is calling the errorHandler.  Use as reference so that you don't have multiple console logs with the same message everywhere
 */ export const errorHandler = <E>(error: E, fromCall: string): string => {
  console.error(`OOPS from: ${fromCall}`, error);
  return JSON.stringify(error);
};
