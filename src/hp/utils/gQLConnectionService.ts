const axios = require("axios").default;
const HP_CONFIG = require("../hp.config");

function gQLConnectionService<T>(
  method: string,
  query: string
  // queryResponse: T
): T {
  const request = axios({
    url: HP_CONFIG.URL,
    method,
    data: {
      query
    }
  });
  return request;
}

export default gQLConnectionService;
