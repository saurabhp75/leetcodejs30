function chunk(arr, size) {
  let temp = [];
  let i = 0;

  console.log(`arr.length: ${arr.length} size: ${size}`);

  if (arr.length === 0) return temp;

  if (size >= arr.length) {
    return [arr];
  }

  //   for (let i = 0; i < arr.length; ++i) {
  //     console.log(`in for loop i: ${i}`);

  //     temp[i] = arr.slice(i * size, (i + 1) * size);
  //     console.log(`index: ${i} temp: ${temp}`);
  //   }

  for (let i = 0; size * i < arr.length; ++i) {
    temp[i] = arr.slice(i * size, (i + 1) * size);
  }

  return temp;
}

// console.log(chunk([1, 2, 3, 4, 5], 2));
//  chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
console.log([1, 2, 3, 4, 5].slice(2, 10));
