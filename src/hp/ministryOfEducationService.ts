import { IQuery, gQlGetterService } from "./utils/gQLConnectionService";
import errorHandler from "./utils/errorHandler";

const axios = require("axios").default;
const HP_CONFIG = require("../hp.config");

// interface IServiceProvider {
//   lookUpStudent(prop: string): any
// }
interface IServiceValues {
  lookedUpStudent?: [];
}

// interface IStudentLookUp


export class MinistryOfEducationService {
  public readonly serviceValues: IServiceValues = {};
  private _serviceValues: IServiceValues = {}

  private async _setResponse(response: any) {
    this._serviceValues = {};  // reset everything
    this._serviceValues = response.data.data;
  }

  // TODO: make generic function to look up student by any value provided, based off lookUpByLastName function in controller
  public async lookupStudent(prop: string) {
    const q: IQuery = {
      query: ``  // TODO: fill in.  Use prop to identify what you are querying
    };

    try {
      const response = await gQlGetterService(q);
      const setResponse = this._setResponse(response);
      return JSON.stringify(this.serviceValues);
      // return this.serviceValues;
    } catch(error) {
      return errorHandler(error);
    }
  }

  // TODO: Is this needed?
  public serviceValueProvider(value: string): IServiceValues {
    return this.serviceValues
  }
}

export const LOOKUP_STUDENT_BY_LASTNAME = async () => {};
