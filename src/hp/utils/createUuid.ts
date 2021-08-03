import faker from "faker";

export type uuid = string;

export function createUuid(): uuid {
  return faker.datatype.uuid();
}
