1. What is two-way binding?

Imagine you want the customer to enter their name on your Spicy Maasa webpage.

When they type Natasha into a text box, the TypeScript variable should update. If the variable changes, the input should reflect the new value too.

Angular supports this using [(ngModel)].


<input [(ngModel)]="customerName" />

The [( )] syntax is often called banana-in-a-box syntax. You don't need to memorize the nickname; just remember that [(ngModel)] keeps the input and component property synchronized.