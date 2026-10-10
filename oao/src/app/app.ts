import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { FormsModule } from '@angular/forms';
import { FishList } from './fish-list/fish-list';

/* This is standalone component 
Can be imported directly into another component

Component metadata is the configuration you write inside @Component({...}) to tell Angular how
 a component should work.

 selector

Defines the HTML tag used to display the component.

Example: selector: 'app-root' → <app-root></app-root>

templateUrl

Specifies the external HTML template.

Example: templateUrl: './app.html'

styleUrl

Specifies the external CSS stylesheet.

Example: styleUrl: './app.css'

imports

Lists components, directives, and pipes available in a standalone component's template, along with applicable NgModules.

Example: imports: [Header, FormsModule]

A parent component is a component that contains or uses another component in its template. The component being used is called the child component.

In your Spicy Maasa project:

App is the parent component.

Header is the child component.
*/
@Component({
  imports: [RouterOutlet, Header,FormsModule,FishList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly name = signal('Customer');

  description = 'Authenticated fish';
  price = 300;
  quantity = 2.5;

  isDisabled = true;

  signUp() {
    alert('Welcome to our authenticated flavour house');
  }

  customerName = 'Customer';

  changeName() {
    this.name.set('Natasha');
  }
}

/*

signUp() is a method (a function inside a class).

alert() displays a popup message in the browser.

Angular can call this method when an event occurs.
In Angular, a Signal is a way to store a value that Angular can track for changes and automatically update the UI when that value changes.
This is the TypeScript/logic part of the component. 


import { Component } from '@angular/core';

We're importing Angular's Component functionality.

@Component({

This tells Angular:

"The following class is an Angular component."

selector: 'app-root'

This defines the HTML tag used to display the component.

templateUrl: './app.component.html'

This tells Angular where the HTML for this component is.

export class AppComponent {

This is where our component's TypeScript logic lives.
*/