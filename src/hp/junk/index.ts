import {
  testAxios,
  testLookupByLastName } from "./1";

const junk = () => {
  const axiosTest = testAxios();
  const lookUpStudent = testLookupByLastName("Potter");
  // const myTest2 = test2();
  // console.log("TEST2 = ", test2);

  console.log("LOOKED UP STUDENT = ", lookUpStudent);
  return {
    axiosTest,
    lookUpStudent,

  }
};

export default junk;