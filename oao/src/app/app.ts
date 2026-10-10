import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';

@Component({
  imports: [RouterOutlet, Header],
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
}

/*
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