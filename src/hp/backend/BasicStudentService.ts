// imports mockStudent?
import { BasicStudent } from "../mockData/mockStudent";
import faker from "faker";

// const basicStudent: BasicStudent = {} // needed?

export interface INewStudent {
  firstName: string;
  lastName: string;
  birthday: Date;
}

export class BasicStudentService {
  // constructor(private readonly basicStudent: BasicStudent) {}
  private readonly _basicStudent2: BasicStudent | {} = {};
  createBasicStudentInfo(data: INewStudent) {
    const uuid = faker.datatype.uuid();
    const basicStudentInfo: BasicStudent = {
      ...data,
      id: uuid
    };
    // post data object => do db things
    // response:
    // on success => return response code and response object

    // FOR NOW:
    return basicStudentInfo;
  }

  getBasicStudentInfo(studentId: string): BasicStudent {
    // do db things.  for now, loop through an array to get the student you call
    return;
  }
}
