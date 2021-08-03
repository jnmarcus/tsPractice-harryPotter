// import ministryOfEducationService from "./ministryOfEducationService";
import {basicStudentService} from "./backend/basicStudentService";

interface INewStudentRequiredDetails {
  firstName: string;
  lastName: string;
  birthday: Date;
}

const ministryOfEducationController = () => {
  const harryPotter = () => {
    let hp: INewStudentRequiredDetails = {
      firstName: "Harry",
      lastName: "Potter",
      birthday: new Date("07/31/1980")
    };
    const student = new basicStudentService()
    return student.createBasicStudentInfo(hp);
  };

  return { harryPotter }
};

export default ministryOfEducationController;
