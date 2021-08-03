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

export default ministryOfEducationController;
