What is interpolation?

Interpolation is used to display data from your TypeScript file inside your HTML template.

In Angular, we write interpolation using double curly braces:

{{ expression }}

name = signal('Natasha');

<h2>Welcome {{ name() }}</h2>

Why name() and not name?

Because name is a signal. Calling name() reads its current value, which is Natasha.


Display a normal variable

In app.ts:

description = 'Buy clean and authentic fish';

<p>{{ description }}</p>


Here, description is a normal string property, not a signal. Therefore, we use {{ description }}, without parentheses.


Interpolation can display expressions too

You don't have to display only variables. You can also use simple expressions.
In typescript
price = 250;
quantity = 3;


<p>Price: ₹{{ price }}</p>

<p>Total: ₹{{ price * quantity }}</p>

<p>Next quantity: {{ quantity + 1 }}</p>