Hook

	

When it runs

	

Common use




ngOnChanges()

	

When an input value changes

	

React to a new fish name or price




ngOnInit()

	

Once after initial input values are set




	

Load initial data from an API




ngDoCheck()

	

During Angular's change-detection checks

	

Custom change detection




ngAfterContentInit()

	

After projected content is initialized

	

Work with content supplied through ng-content




ngAfterViewInit()

	

After the component's view is initialized

	

Access view elements or child components




ngOnDestroy()

	

Before the component is destroyed

	

Clean up subscriptions or listeners

For beginners, focus first on ngOnInit(), ngOnChanges(), and ngOnDestroy().


3. Example: ngOnInit()

Suppose you want to display a welcome message when your fish-list component starts.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.html'
})
export class FishList implements OnInit {

  message = '';

  ngOnInit(): void {
    this.message = 'Welcome to Spicy Maasa!';
  }
}

<h2>{{ message }}</h2>

import {
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.html'
})
export class FishList implements OnChanges {

  @Input() fishName = 'Pomfret';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fishName']) {
      console.log('Fish name changed:', this.fishName);
    }
  }
}

import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-fish-list',
  template: `<p>Fish list is open</p>`
})
export class FishList implements OnDestroy {

  ngOnDestroy(): void {
    console.log('Fish list component is being destroyed');
  }
}constructor(): JavaScript/TypeScript creates the class instance. Use it mainly for dependency injection and basic setup.

ngOnInit(): Angular has initialized the component's initial inputs. Use it for component initialization logic.