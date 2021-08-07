import * as faker from "faker/locale/en";

export type uuid = string;

export function createUuid(): uuid {
  return faker.datatype.uuid();
}
