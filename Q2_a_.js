const arr = ["Hi", "world", "hello", "Hii", "hi", "hi World", "Hi"];
const arr2 = arr.filter((element, index) => {
  const ele2 = element.substring(0, 2);
  return ele2 === "hi";
});

console.log(arr2);

/* ["hi", "hi World"] */
