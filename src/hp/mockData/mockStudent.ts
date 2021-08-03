import faker from "faker";

export interface BasicStudent {
  id: string;
  firstName: string;
  lastName: string;
  birthday: Date;
}

export interface StudentPii extends BasicStudent {
  age: number;
  homeMailingStreetAddress: string;
  homeMailingAddress_City: string;
  homeMailingAddress_Country: string;
  homeMailingAddress_PostalCode: string;
  isMuggleBorn: boolean;
  hasMuggleLegalGuardian: boolean;
  hasAllMuggleHousehold: boolean;
  preferredMailDelivery: string;
}

export interface DetailedStudent extends BasicStudent {
  house: string;
  grade: string;
  roommates: BasicStudent[];
  extracurriculars: string[];
  encrolledCourses: object[];
  owlName: string;
  owlBreed: string;
  wandType: string;
  reportCards: object[];
}

export interface VerboseStudent {
  // all student interfaces (implements? extends?)
}

export class MockStudent {
  mockNewStudent() {
    return {
      // firstName(): string  => {faker.name.firstName()}
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      birthday: faker.date.past()
    };
  }
}
