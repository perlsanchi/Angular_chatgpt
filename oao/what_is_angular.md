Angular is a frontend framework created by Google.

It is used to build web applications such as:
Banking applications
E-commerce applications
Admin dashboards
Employee portals
Booking applications
Financial applications

Angular handles the frontend.

Django handles the backend.

PostgreSQL handles the database.

2. What does Angular actually do?

Suppose the user clicks:

[ Add Task ]

Angular can:

User clicks button
       ↓
Angular detects click
       ↓
Angular executes TypeScript
       ↓
Angular updates the page
       ↓
Angular sends API request
       ↓
Django processes request

So Angular is responsible for the application's user interface and frontend logic.


3. Angular uses TypeScript

Angular applications are primarily written using TypeScript.
let name: string = "Tasha";

function greet() {
  console.log("Hello");
}

just like python
name = "Tasha"

def greet():
    print("Hello")


4. What are Node.js and npm?

Before creating an Angular project, you need Node.js.

Node.js

Allows JavaScript/Angular development tools to run on your computer.

npm

Means Node Package Manager.

It downloads and manages packages your Angular project needs.

For example:

Angular project
      ↓
package.json
      ↓
npm
      ↓
Angular packages


5. Angular CLI

CLI = Command Line Interface.

Angular CLI lets you create and manage Angular applications from the terminal.

Install - npm install -g @angular/cli
ng version
ng is angular cli


creating our project
ng new oao
PS C:\Users\Natasha\Desktop\October\Angular_learnings> cd ..
PS C:\Users\Natasha\Desktop\October> ng new oao
√ Which stylesheet system would you like to use? CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]
√ Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? No
√ Which AI tools should Angular integrate with? https://angular.dev/ai/develop-with-ai None
CREATE oao/.prettierrc (173 bytes)
CREATE oao/angular.json (1967 bytes)
CREATE oao/package.json (779 bytes)
CREATE oao/README.md (1515 bytes)
CREATE oao/tsconfig.json (939 bytes)
CREATE oao/.editorconfig (331 bytes)
CREATE oao/.gitignore (666 bytes)
CREATE oao/tsconfig.app.json (412 bytes)
CREATE oao/tsconfig.spec.json (423 bytes)
CREATE oao/.vscode/extensions.json (134 bytes)
CREATE oao/.vscode/launch.json (490 bytes)
CREATE oao/.vscode/tasks.json (1020 bytes)
CREATE oao/src/main.ts (228 bytes)
CREATE oao/src/index.html (302 bytes)
CREATE oao/src/styles.css (81 bytes)
CREATE oao/src/app/app.spec.ts (701 bytes)
CREATE oao/src/app/app.ts (298 bytes)
CREATE oao/src/app/app.css (0 bytes)
CREATE oao/src/app/app.html (20488 bytes)
CREATE oao/src/app/app.config.ts (322 bytes)
CREATE oao/src/app/app.routes.ts (80 bytes)
CREATE oao/public/favicon.ico (15086 bytes)
| Installing packages (npm)...

cd oao
ng serve


django created 
taskflow/
│
├── node_modules/
├── public/
├── src/
│
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md

src - where your code lives
src/
│
├── app/
├── assets/
├── index.html
├── main.ts
└── styles.css







9. What is a Component?

This is one of the most important concepts in Angular.

A component represents a piece of your application's UI.

For example:

TaskFlow
│
├── Navbar
├── Sidebar
├── Dashboard
├── Task List
├── Task Card
└── Footer

Each can be an Angular component.

Think:

Component = UI + logic

For example:

TaskCardComponent

        ↓

HTML
Task title
Task status
Buttons

        +

TypeScript
completeTask()
deleteTask()
editTask()


Angular creates components in 
src/app/
    app.component.ts
    app.component.html
    app.component.css

flow
index.html
     ↓
main.ts
     ↓
Angular application
     ↓
AppComponent
     ↓
app.component.html
     ↓
Browser


17. index.html

You'll find:

src/index.html

It contains something similar to:

<body>
  <app-root></app-root>
</body>

Remember our selector?

selector: 'app-root'

So Angular knows that:

<app-root></app-root>

represents our AppComponent.