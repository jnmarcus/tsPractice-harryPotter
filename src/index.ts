import user1 from "./user";
import foo from "./foo";
// import * as faker from "faker/locale/en";
import { mockCourse } from "./hp/mockData/mockCourse";
import { MockStudent } from "./hp/mockData/mockStudent";
import {
  ministryOfEducationController,
  MinistryOfEducationController
} from "./hp/ministryOfEducationController";
import { Student } from "./hp/student";
import junk from "./hp/junk";

const axios = require("axios").default;
const URL = "https://charming-boxer-87.hasura.app/v1/graphql";

const testUser = user1();
const bar = foo();
const myCourse = mockCourse();
const myJunk = junk();

const controller = new MinistryOfEducationController();

const hermioneGranger = new Student();
const hermioneCourses = hermioneGranger.getAllRegisteredCourses("2019");

const createHarryPotter = ministryOfEducationController().harryPotter();

const mockNewStudent = new MockStudent().mockNewStudent();
// console.log("MOCK NEW STUDENT = ", mockNewStudent);

controller.registerNewStudent(mockNewStudent);
controller.lookUpByLastName('Potter');

// const testLooker = async () => {
//   // NOTE: works, but for now this writes over Harry Data (injects to same html id)
//   const l = await controller.lookUpByLastName('Weasley');
//   return l;
// };


// _____________________________________________________________
// @ts-ignore
document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>

<pre>${JSON.stringify(hermioneCourses)}</pre>
<pre>${JSON.stringify(createHarryPotter)}</pre>
<pre id="myPre"></pre>
`;
