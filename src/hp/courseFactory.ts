import { mockCourse, CourseMeta } from "./mockData/mockCourse";

const courseFactory = () => {
  function getCourse1(): CourseMeta {
    return mockCourse();
  }
  return { getCourse1 };
};

export default courseFactory;
