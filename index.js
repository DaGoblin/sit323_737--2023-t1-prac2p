// log("hello world");
// log("This is SIT737");

var async = function () {
  setTimeout(function () {
    log("I'm coming out later although I have been called");
  }, 2000);
};

var adder = function (first, second) {
  var sum = first + second;
  return sum;
};

const log = function (msg) {
  console.log("[Log]:", msg);
};

async();
log("The sum is " + adder(5, 6));
