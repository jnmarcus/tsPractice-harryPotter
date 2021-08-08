import { mockCourse } from "./mockData/mockCourse";
import courseFactory from "./courseFactory";

interface Course {
  id: string;
  name: string;
  professor: string;
}
// view model?
export class Student {
  getAllRegisteredCourses(termYear: string): Course[] {
    // query db: (GraphQL!)
    // const queriedResult: Course[] = () => {};

    // shallow copy of mockCourse:
    let queriedResult: Course[] = [{ ...mockCourse() }];

    // Javier: which method is preferred?
    // console.log("COURSE FACTORY = ", courseFactory().getCourse1());
    // console.log("QUERIED RESULT = ", mockCourse(), termYear);
    return queriedResult;
  }
}
