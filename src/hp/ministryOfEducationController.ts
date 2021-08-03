// import ministryOfEducationService from "./ministryOfEducationService";
import {
  INewStudent,
  BasicStudentService
} from "./backend/BasicStudentService";

// interface INewStudentRequiredDetails {
//   firstName: string;
//   lastName: string;
//   birthday: Date;
// }

const ministryOfEducationController = () => {
  const harryPotter = () => {
    let hp: INewStudent = {
      firstName: "Harry",
      lastName: "Potter",
      birthday: new Date("07/31/1980")
    };
    return new BasicStudentService().createBasicStudentInfo(hp);
  };

  return { harryPotter };
};

class MinistryOfEducationController {
  constructor(newStudent?: INewStudent) {}
  // private readonly _basicStudent = new BasicStudentService();
  private _basicStudent = new BasicStudentService();

  registerNewStudent(newStudent: INewStudent) {
    const student = this._basicStudent.createBasicStudentInfo(newStudent);
    console.log("NEW REGISTERED STUDENT = ", student);
    return student;
  }
}

export { ministryOfEducationController, MinistryOfEducationController };
