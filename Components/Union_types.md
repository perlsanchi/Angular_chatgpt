1. What is a union type?

A union type allows a variable to accept more than one specified type of value.

In TypeScript, we use the pipe symbol |.

For example, an order status might be a string, but we want to restrict it to only three valid values: pending, shipped, or delivered.

orderStatus: 'pending' | 'shipped' | 'delivered' = 'pending';
This means orderStatus can contain any one of those three values, but not other strings.