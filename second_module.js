console.log('second module running');

var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`


console.log(message);

console.log(card);

console.log(customer);
