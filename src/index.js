//Promise chain

let data = "ABC";

const callAPI1 = async () => {
  let timeOut = (await data) + "D";

  return timeOut;
};

const callAPI2 = async (data1) => {
  return (await data1) + "E";
};

const callAPI3 = async (data2) => {
  return (await data2) + "F";
};

callAPI1().then((data1) => {
  callAPI2(data1).then((data2) =>
    callAPI3(data2).then((data3) => console.log(data3))
  );
});
