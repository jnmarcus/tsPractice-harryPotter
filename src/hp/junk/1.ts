const axios = require("axios").default;
// https://medium.com/@stubailo/how-to-call-a-graphql-server-with-axios-337a94ad6cf9
// https://stackoverflow.com/questions/48980380/returning-data-from-axios-api

const URL = "https://charming-boxer-87.hasura.app/v1/graphql";

export const testAxios = () => {
  // const axios = require("axios");
  axios({
    url: URL,
    method: "post",
    data: {
      query: `
      query GetCharacters {
        hp_characters {
          firstName
          date_created
          house
          id
          lastName
          role
        }
      }
        `
    }
  }).then((result) => {
    console.log("AXIOS RESULT = ", result.data);
  });
};

export const testLookupByLastName = (lastName: string): any => {
  let myResult;
 return axios({
//   axios({
    url: URL,
    method: "POST",
    data: {
      query: `
      query FindStudentByLastName {
        hp_characters(where: {lastName: {_eq: "${lastName}"}}) {
          firstName
          date_created
          house
          id
          lastName
          role
        }
      }
      `
  // return myResult;
}});}

