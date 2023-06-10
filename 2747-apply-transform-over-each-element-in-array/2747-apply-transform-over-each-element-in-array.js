var map = (arr, fn) => {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const transformedValue = fn(arr[i],i);
    newArray.push(transformedValue);
  }

  return newArray;
};
