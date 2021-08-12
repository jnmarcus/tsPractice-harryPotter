import { IPerson } from "../mockData/genericInterfaces";
import { createUuid } from "../utils/creatUuid";
import { keyValueMatcher } from "../utils/keyValueMatcher";

const hasura = require("../mockData/hasura.json").data;

interface INewPerson {
  firstName: string;
  lastName: string;
  birthday?: Date;
  species: "human";
}

interface IQueryParams {
  [k: string]: string | Date;
}

export const createNewPerson = (person: INewPerson): IPerson => {
  return {
    ...person,
    personId: createUuid()
  }
}

export const getBasicPersonInfo = (valueToSearchBy: IQueryParams): IPerson[] => {
  //  look up a person by a specified property and its corresponding value.
  // Requires an array to start with
  const arr = hasura.hp_characters;
  const matches = arr.filter(keyValueMatcher(valueToSearchBy));
    // console.log("HASURA = ", matches);
    // returns one or many values
  return matches;
}
