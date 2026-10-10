In Angular, template variables let you refer to an HTML element, a component, or a directive directly from your HTML template.

They are declared using the # symbol.


2. Example: Clear an input

You can use a template variable to clear an input without creating a separate property in TypeScript.
<input #mobileInput placeholder="Enter mobile number">

<button (click)="mobileInput.value = ''">
  Clear
</button>

When you click Clear, the input becomes empty.