const foo = () => {
  const arr = [
    {
      id: "123",
      name: "sally smith"
    },
    {
      id: "456",
      name: "mark jones"
    }
  ];

  function finderName(item) {
    return item.name === "sally smith";
    // return item.name === "bob smith";
  }

  const checker = arr.find(finderName);

  function hasMatch() {
    // const b = checker ? true : false;
    // return b;
    // return checker ? true : false;
    // return !!checker;
    return !!arr.find(finderName);
  }
  hasMatch();

  console.log("CHECKER = ", checker);
  console.log("HAS MATCH = ", hasMatch());
};

export default foo;
