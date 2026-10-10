
A template is the HTML that tells Angular what to display on the screen.

In your existing project, you already have a template containing Spicy Maasa, your welcome message, and buttons.

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})

templateUrl: './app.html'

It tells Angular to use app.html as the component's template.

this is the template
<h1>Spicy Maasa</h1>

<h2>Welcome {{ name() }}</h2>

<p>Buy the clean and authentic fish... {{ description }}</p>

<button>Sign up</button>
<button>View Tasks</button>
<button>Add Task</button>

3. What are the two types of templates?
A. External template

This is what your project uses.

In app.ts:

templateUrl: './app.html'

The HTML is written in a separate file called app.html.


B. Inline template

You can also write the HTML directly inside the TypeScript file using template:

@Component({
  selector: 'app-example',
  standalone: true,
  template: `<h1>Hello Angular!</h1>`
})
export class Example {}

Here, template contains the HTML directly, so there is no separate HTML file required for this component.

For our TaskFlow project, we'll continue using external templates because they keep our HTML separate from our TypeScript logic.