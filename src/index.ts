import user1 from "./user";
import foo from "./foo";
import faker from "faker";
// import { mockCourse } from "./hp/mockData/mockCourse";
import { MockStudent } from "./hp/mockData/mockStudent";
import {ministryOfEducationController, MinistryOfEducationController} from "./hp/ministryOfEducationController";

import { Student } from "./hp/student";

const testUser = user1();
const bar = foo();
// const myCourse = mockCourse();

const controller = new MinistryOfEducationController();

const hermioneGranger = new Student();
const hermioneCourses = hermioneGranger.getAllRegisteredCourses("2019");

const createHarryPotter = ministryOfEducationController().harryPotter()

const mockNewStudent = new MockStudent().mockNewStudent();
console.log('MOCK NEW STUDENT = ', mockNewStudent);

controller.registerNewStudent(mockNewStudent)

// won't work unless you create a static method
// const harryPotterClasses = Student.getAllRegisteredCourses('2019')

console.log(faker.random.arrayElement(["a", "b", "c"]));

// _____________________________________________________________
document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>

<pre>${JSON.stringify(hermioneCourses)}</pre>
<pre>${JSON.stringify(createHarryPotter)}</pre>
`;
