// ToDo
var timeLimit = function (fn, t) {
  return async function (...args) {};
};

// Sample input function
function fn(t) {
  return new Promise((res) => setTimeout(res, t));
}

const limited = timeLimit(fn, 100);

limited(150).catch(console.log); // “Time Limit Exceeded” at t=100ms
