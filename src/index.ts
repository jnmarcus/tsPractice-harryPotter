import faker from "faker";
// import { mockCourse } from "./hp/mockData/mockCourse";
import ministryOfEducationController from "./hp/ministryOfEducationController";
import { MockPerson } from "./hp/mockData/MockPerson";

import { Student } from "./hp/student";
import { Person } from "./hp/common/Person";

// const myCourse = mockCourse();

const hermioneGranger = new Student();
const hermioneCourses = hermioneGranger.getAllRegisteredCourses("2019");

const createHarryPotter = ministryOfEducationController().harryPotter();

const searchObj = {
  lastName: "Weasley"
};

console.log(new Person().getBasicPersonInfo(searchObj));
console.log(new MockPerson());

// won't work unless you create a static method
// const harryPotterClasses = Student.getAllRegisteredCourses('2019')

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
