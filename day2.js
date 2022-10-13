// Make sure you understand these before taking a look at the question:
// Replace (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
// Split (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet

// From: https://www.codewars.com/kata/514a024011ea4fb54200004b

// Hint: Use replace on the parts of the url you want gone. You can replace with an empty string ''. Then split the string using . as the seperator and take the first part [0]

// function parseDomain(str) {
//   let remove = ['http://', 'https://', 'www.']
//   for (let i = 0; i < remove.length; i++) {
//     if (str.includes(remove[i])) {
//       str = str.replace(remove[i], '')
//     }
//   }
//   return str.split('.')[0]
// }

function parseDomain(str) {
  return str
    .replace('www.', '')
    .split('//')
    .map((el) => el.split('.'))[1][0];
}

console.log(parseDomain('http://github.com/carbonfive/raygun'));
console.log(parseDomain('http://www.zombie-bites.com'));
console.log(parseDomain('https://www.cnet.com'));
