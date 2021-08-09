import faker from "faker";

interface CourseMeta {
  id: string;
  courseName: string;
  // name(): string;
  professor: string;
  // professor(): string;
  description?: string;
  // prerequisites?: Course[] | string;
  // prerequisites?: getPreReqs(): Course[] | string;
  prerequisites?(): CourseMeta[] | string;
}

// is Course (as a class) needed, since we are not declaring a NEW course?
// class Course {
//   constructor(
//     getPreReqs: getPreReqs,
//   ){}
//   getPreReqs() {
//     // todo: make pre-reqs, for now return none
//     const arr: CourseMeta[] = []
//     return arr.length ? arr : 'none';
//   }
// }

// TODO: make Course class that constructs the mock Course that you can call new Course(), multiple times

const mockCourse = (): CourseMeta => {
  function mockFullName(): string {
    return `${faker.name.firstName()} ${faker.name.lastName()}`;
  }

  function mockCourseName(): string {
    return `${faker.company.catchPhraseAdjective()} ${faker.hacker.noun()}s`
  }

  return {
    id: faker.datatype.uuid(),
    courseName: mockCourseName(),
    professor: mockFullName()
    // prerequisites: Course.getPreReqs()
  };
};

export {mockCourse, CourseMeta} ;
