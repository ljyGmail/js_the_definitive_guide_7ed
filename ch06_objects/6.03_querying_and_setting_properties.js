const book = {
  author: {
    surname: "Zhou Huajian",
  },
  "main title": "Node.js",
};

let author = book.author; // Get the "author" property of the book
let name = author.surname; // Get the "surname" property of the book
console.log(name);
let title = book["main title"]; // Get the "main title" property of the book
console.log(title);

// create or set a property
book.edition = 7; // Create an "edition" property of book
book["main title"] = "ECMAScript"; // Change the "main title" property

// # 6.3.1 Objects As Associative Arrays
// object.property
// object["property"]

const customer = {
  address0: "Seoul",
  address1: "Beijing",
  address2: "Tieling",
  address3: "Hwagok",
};

let addr = "";
for (let i = 0; i < 4; i++) {
  addr += customer[`address${i}`] + "\n";
}
console.log(addr);

// A case that only the array notation can be used, but not the dot notation.
function addStock(portfolio, stockName, shares) {
  portfolio[stockName] = shares;
}

function getQuotes(stock) {
  const lookup = {
    ibm: 5,
    apple: 4,
    android: 3,
  };
  return lookup[stock];
}

const portfolio = {};
addStock(portfolio, "ibm", 20);
addStock(portfolio, "apple", 30);
addStock(portfolio, "android", 40);

function computeValue(portfolio) {
  let total = 0.0;
  for (let stock in portfolio) {
    let shares = portfolio[stock];
    let price = getQuotes(stock);
    total += shares * price;
  }
  return total;
}

const total = computeValue(portfolio);
console.log(total);
console.log("-".repeat(30));

// # 6.3.2 Inheritance
let o = {}; // o inherits object methods from Object.prototype
o.x = 1; // and it now has an own property x
let p = Object.create(o); // p inherits properties from o and Object.prototype
p.y = 2; // and has an own property y
let q = Object.create(p); // q inherits properties from p, o, and...
q.z = 3; // ... Object.prototype and has an own property z
let f = q.toString(); // toString is inherited from Object.prototype
console.log(q.x + q.y); // => 3; x and y are inherited from o and p

let unitCircle = { r: 1 }; // An object to inherit from
let c = Object.create(unitCircle); // c inherits the property r
c.x = 1; // c defines two properties of its own
c.y = 1;
c.r = 2; // c overrides its inherited property
console.log(unitCircle.r); // => 1: the prototype is not affected
console.log("-".repeat(30));
