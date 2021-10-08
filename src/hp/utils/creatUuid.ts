//TODO: do this server side when a new character is created, and make the uuid part of the response

import * as faker from "faker/locale/en";

export type uuid = string;

export function createUuid(): uuid {
  return faker.datatype.uuid();
}
