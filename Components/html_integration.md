1. What does HTML integration mean?

HTML integration means connecting your HTML page to your Angular component so the browser can display the content and use the component's data.


Step 1 — Write data in app.ts

Suppose your component contains:


import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = signal('Natasha');
  description = 'Buy clean and authentic fish';
}

What does this code do?

name = signal('Natasha') creates a signal containing the name Natasha.

description = 'Buy clean and authentic fish' creates a normal TypeScript property.

templateUrl: './app.html' connects the component to your HTML file.

Use the class name and existing configuration from your own project; don't replace them blindly with this example.

Your HTML can access the component's properties:


<h1>Spicy Maasa</h1>

<h2>Welcome {{ name() }}</h2>

<p>{{ description }}</p>

<button>Sign up</button>
<button>View Tasks</button>
<button>Add Task</button>


