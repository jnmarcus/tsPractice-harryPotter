import errorHandler from "./errorHandler";

const axios = require("axios").default;
const HP_CONFIG = require("../../hp.config");

export interface IQuery {
  query: string;
}

// function gQLConnectionService<T>(
const gQLConnectionService = async (
  method: string,
  query: string
  // queryResponse: T
// ): T {
  ) => {
    const request = await axios({
      url: HP_CONFIG.URL,
      method,
      data: {
        query
      }
    });
    return request;
}

export default gQLConnectionService;

export const gQlGetterService = async (query: IQuery) => {
  // const q = { query: query} // TODO: fix this so you don't have to write the word query in every request
  const request = await axios.post(HP_CONFIG.API_URL, query, { ...HP_CONFIG.API_HEADERS });
  return request;
}
