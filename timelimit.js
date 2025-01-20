// ToDo
var timeLimit = function (fn, t) {
  return async function (...args) {
    // wait for t seconds before rejecting with time limit exceeded
    return new Promise(async (resolve, reject) => {
      const id = setTimeout(() => reject("Time Limit Exceeded"), t);
      try {
        const res = await fn(...args);
        resolve(res);
      } catch (error) {
        reject(error);
      } finally {
        clearTimeout(id);
      }
      //   fn(...args)
      //     .then((res) => resolve(res))
      //     .catch((error) => console.log(error))
      //     .finally(() => clearTimeout(id));
    });
  };
};

// Sample input function
function fn(t) {
  return new Promise((res) => setTimeout(() => res("saurabhp75"), t));
}

const limited = timeLimit(fn, 100);

limited(150)
  .then((res) => console.log(res))
  .catch(console.log) // “Time Limit Exceeded” at t=100ms
  .finally(() => console.log("finally called"));
