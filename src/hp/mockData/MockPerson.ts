import faker from "faker/locale/en";
import { IPerson } from "./genericInterfaces";
import { createUuid } from "../utils/creatUuid";

interface IPersonMeta {
  personId: string;
  species: "human";
}

export class MockPerson {
  private _personId = createUuid();
  private _firstName = faker.name.firstName();
  private _lastName = faker.name.lastName();
  private _birthday = faker.date.past();
  // _species = "human";

  // use if you need all data stubbed out
  mock(): IPerson {
    return {
      personId: createUuid(),
      firstName: this._firstName,
      lastName: this._lastName,
      birthday: this._birthday,
      species: "human"
    };
  }

  mockBirthday(): Date {
    // return birthday only
    return this._birthday;
  }

  mockMeta(): IPersonMeta {
    // returns stubs for id and species only
    return {
      personId: this._personId,
      species: "human"
    };
  }
}
