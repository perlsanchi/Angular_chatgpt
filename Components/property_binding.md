. What is property binding?

Property binding lets Angular set an HTML element's property using a value from your TypeScript component.

For example, we can use property binding to disable a button when a user is not allowed to click it.
isDisabled = true;

<button [disabled]="isDisabled">Sign up</button>
<button>View Tasks</button>
<button>Add Task</button>


Example

	

What it does




[disabled]="isDisabled"

	

Enables or disables a button




[hidden]="hideMessage"

	

Hides an element when the value is true




[value]="name()"

	

Sets an input's value from a signal




[src]="imageUrl"

	

Sets an image's source URL




[alt]="imageDescription"

	

Sets an image's alternative text