module.exports = function toReadable (number) {
  let ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  let numbers = number.toString().split("");
  let result = "";

  if (number === 0) return "zero";

  if (number < 20) {
    result = ones[number];
  } else if (number < 100) {
    result = tens[numbers[0] - 2] + " " + toReadable(+numbers.slice(1).join(""));
  } else if (number < 1000) {
    result = ones[numbers[0]] + " hundred " + toReadable(+numbers.slice(1).join(""));
  } else if (number < 1000000) {
    result = toReadable(+numbers.slice(0, -3).join("")) + " thousand " + toReadable(+numbers.slice(-3).join(""));
  }

  return result.split(" ").filter(word => word !== "zero").join(" ");
}