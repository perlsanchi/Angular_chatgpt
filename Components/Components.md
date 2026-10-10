A component is a small, reusable part of a webpage.

Each component has a specific responsibility. This makes an application easier to develop, understand, test, and maintain.

2. What files make up a component?

An Angular component commonly has three main files and a TypeScript class.

File

	

Purpose




app.component.ts

	

Component logic and configuration




app.component.html

	

What appears on the screen




app.component.css

	

How the screen looks

Angular can also put the template and styles directly inside the TypeScript file, but separate files are common and easier for beginners.

3. Understand our existing App component

Open your TaskFlow project in VS Code and find src/app/app.component.ts.

Your project may have a slightly different structure depending on your Angular version. A simple standalone component looks like this:

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaskFlow';
}

import allows us to use something defined in another module.

Component is an Angular feature used to define a component.

@angular/core is one of Angular's core packages.


Without importing Component, we cannot use Angular's @Component decorator in this file.

This tells Angular how the component should work.

@Component — marks the class as an Angular component.

selector: 'app-root' — the HTML tag Angular uses to display this component.

standalone: true — lets the component work without declaring it in an NgModule.

imports: [] — where we add other Angular features or components this component needs.

templateUrl — points to the HTML file.

styleUrl — points to the CSS file.


export makes the class available for other files to import.

class AppComponent defines the component's TypeScript class.

title = 'TaskFlow' stores a value that the component can use.


4. How does Angular display the component?

Angular connects the component to the webpage through its selector.

In src/index.html, you’ll usually find:

<body>
  <app-root></app-root>
</body>


The <app-root> tag matches the component's selector:

ng generate component header  to create new header  

A child component is a component that is used inside another component's template.


Parent → Child: pass data using input().

Child → Parent: send events using output().

Parent ↔ Child: combine inputs and outputs for two-way communication.

Unrelated components: share data through a service.