import { mockCourse } from "./mockData/mockCourse";

interface Course {
  id: string;
  name: string;
  professor: string;
}
// view model?
export class Student {
  createNewStudent(): {}
  getAllRegisteredCourses(termYear: string): Course[] {
    // query db: (GraphQL!)
    // const queriedResult: Course[] = () => {};

    // shallow copy of mockCourse:
    let queriedResult: Course[] = [{ ...mockCourse() }];

    console.log("QUERIED RESULT = ", mockCourse(), termYear);
    return queriedResult;
  }
}
