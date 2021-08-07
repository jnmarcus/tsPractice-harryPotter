// import user1 from "./user";
// import foo from "./foo";
// import faker from "faker";
// import { mockCourse } from "./hp/mockData/mockCourse";
// import { MockStudent } from "./hp/mockData/mockStudent";
import {
  ministryOfEducationController,
  MinistryOfEducationController
} from "./hp/ministryOfEducationController";
import { Student } from "./hp/student";
import junk from "./hp/junk";

const axios = require("axios").default;
const URL = "https://charming-boxer-87.hasura.app/v1/graphql";

// const testUser = user1();
// const bar = foo();
// const myCourse = mockCourse();
const myJunk = junk();

const controller = new MinistryOfEducationController();

const hermioneGranger = new Student();
const hermioneCourses = hermioneGranger.getAllRegisteredCourses("2019");

const createHarryPotter = ministryOfEducationController().harryPotter();

// const mockNewStudent = new MockStudent().mockNewStudent();
// console.log("MOCK NEW STUDENT = ", mockNewStudent);

// controller.registerNewStudent(mockNewStudent);

// won't work unless you create a static method
// const harryPotterClasses = Student.getAllRegisteredCourses('2019')

// console.log(faker.random.arrayElement(["a", "b", "c"]));



let myFuncResponse: {};

const myData = {
  query: `
      query FindStudentByLastName {
        hp_characters(where: {lastName: {_eq: "Potter"}}) {
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
const myConfig = {
  headers: {
    "Content-Type": "application/json"
  }
}

function failureCallback(error: any) {
  console.error('OOPS', error)
}

async function setResult(result: any) {
  myFuncResponse = {};
  console.log('RESULT = ', result);
  myFuncResponse = result;
  console.log('MY FUNC RESPONSE = ', myFuncResponse);
}

async function doThirdThing(newResult) {
  document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>

<pre>${JSON.stringify(hermioneCourses)}</pre>
<pre>${JSON.stringify(createHarryPotter)}</pre>
<pre>${JSON.stringify(myFuncResponse.data.data.hp_characters[0])}</pre>
`;
}

async function myFunc(){
  try {
    // const result = await doSomething(); // call axios
    const result = await axios.post(URL, myData, myConfig )
    // const newResult = await doSomethingElse(result); // set myFuncResponse = result
    const newResult = await setResult(result);
    const finalResult = await doThirdThing(newResult);
    // console.log(`Got the final result: ${finalResult}`);
    console.log(`Got the final result: ${JSON.stringify(myFuncResponse.data.data.hp_characters[0])}`);
    // return JSON.stringify(myFuncResponse.data.data.hp_characters[0]);
    // return myFuncResponse.data.data.hp_characters[0];
  } catch(error) {
    failureCallback(error);
  }
}

myFunc();


// _____________________________________________________________
// document.getElementById("app").innerHTML = `
// <h1>Hello Parcel!</h1>
// <div>
//   Look
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
//   for more info about Parcel.
// </div>
//
// <pre>${JSON.stringify(hermioneCourses)}</pre>
// <pre>${JSON.stringify(createHarryPotter)}</pre>
// <pre id="myPre"></pre>
// <!--<pre>${JSON.stringify(myFunc())}</pre>-->
// `;
