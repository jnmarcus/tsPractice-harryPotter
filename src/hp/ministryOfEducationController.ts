// import ministryOfEducationService from "./ministryOfEducationService";
import {
  INewStudent,
  BasicStudentService
} from "./backend/BasicStudentService";

import errorHandler from "./utils/errorHandler";
const axios = require("axios").default;
const HP_CONFIG = require("../hp.config");

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
  private _gqlResponse = {};

  private async _parseResponse(result: any) {
    this._gqlResponse = {};
    // console.log('RESULT = ', result);
    this._gqlResponse = result;
    console.log('GQL RESPONSE = ', this._gqlResponse);
  }

  private async _injectResponse(result: any) {
    const f = JSON.stringify(this._gqlResponse.data.data.hp_characters[0]);
    // @ts-ignore
    document.getElementById('myPre').innerHTML = `${f}`;
  }

  registerNewStudent(newStudent: INewStudent) {
    const student = this._basicStudent.createBasicStudentInfo(newStudent);
    // console.log("NEW REGISTERED STUDENT = ", student);
    return student;
  }

  async lookUpByLastName(lastName: string) {
    const qConfig = { ...HP_CONFIG.API_HEADERS };
    // query to call:
    const q = {
      query: `
      query FindStudentByLastName {
        hp_characters(where: {lastName: {_eq: "${lastName}"}}) {
          firstName
          date_created
          house
          id
          lastName
          role
        }
      }
      `
    };

    // query gql
    try {
      const result = await axios.post(HP_CONFIG.API_URL, q, qConfig )
      const newResult = await this._parseResponse(result);
      // inject html here:
      const finalResult = await this._injectResponse(newResult);
      const f = JSON.stringify(this._gqlResponse.data.data.hp_characters[0])
      console.log(`Got the final GQL result: ${f}`);
      return f;
    } catch(error) {
      return errorHandler(error)
    }

  }
}

export { ministryOfEducationController, MinistryOfEducationController };
