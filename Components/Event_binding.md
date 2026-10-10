1. What is event binding?

Event binding lets you respond to user actions, such as clicking a button, typing in an input, or submitting a form.

(event)="method()"

<button (click)="signUp()">Sign up</button>

Here, (click) tells Angular to call the signUp() method when the user clicks the button.

Click

	

(click)="signUp()"

	

Responds to a click

Input

	

(input)="updateName($event)"

	

Responds as the user types

Change

	

(change)="updateQuantity($event)"

	

Responds when a value changes

Submit

	

(submit)="saveTask()"

	

Responds to form submission