// imports mockStudent?
import { BasicStudent } from "../mockData/mockStudent";
import faker from "faker";

// const basicStudent: BasicStudent = {} // needed?

interface IRequiredStudentData {
  firstName: string;
  lastName: string;
  birthday: Date;
}

export class basicStudentService {
  createBasicStudentInfo(data: IRequiredStudentData) {
    const uuid = faker.datatype.uuid();
    const basicStudentInfo: BasicStudent = {
      ...data,
      id: uuid,
    }
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
