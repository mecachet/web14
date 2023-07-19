console.log("JavaScript file is linked correctly. Hooray.");
const numberArrays = [2, 4, 6, 8, 10, 12];
numberArrays.pop();
numberArrays.unshift(12);
console.log(numberArrays);
const productList = [
  { productTitle: "USB Drive", productPrice: 25 },
  { productTitle: "Wireless Charger", productPrice: 80 },
  { productTitle: "WhyPhone", productPrice: 1140 },
];
console.log(productList);
const numbers = [46, 122, 74, 8, 64];
const average =
  (numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]) /
  numbers.length;
console.log(average);
const phone = {
  phoneName: "Google Pixel",
  phoneDescription: "Android OS",
  phonePrice: 1100,
  shopAddresses: ["Tsereteli Av, Kidobani"],
  phoneMemoryInGB: 256,
};
console.log(phone);
console.log(
  `Phone model is ${phone.phoneName}, the price is ${phone.phonePrice}, and you can purchase it at ${phone.shopAddresses[0]}.`
);
