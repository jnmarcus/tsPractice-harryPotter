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
    // }}).then(returnResponse);
  }).then((result) => {
    console.log("BY LASTNAME = ", result.data.data);
    // myResult = result.data.data.hp_characters[0];
    return result.data;
  });
  // return myResult;
};

// function makeRequest()

export const test2 = () => {
  function makeRequest(lastName: string) {
    const promise = axios({
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
      // }}).then(returnResponse);
      }
    });
  
    const dataPromise = promise.then((response) => response.data)
  
    return dataPromise;
  }
 const myRequest = makeRequest('Potter').then(data => {
  response.json({ message: 'Request received!', data })
})
.catch(err => console.log(err))

return { makeRequest}
}

export const test3 = async (lastName: string) => {
  try {
    // const response = await axios.get('/user?ID=12345');
    const response = await axios({
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
      }
    })
    .then((response) => response.data);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
//   finally {
// returnResponse(response)
//   }  
}

// query PostsForAuthor {
//   author(id: 1) {
//     firstName
//     posts {
//       title
//       votes
//     }
//   }
// }