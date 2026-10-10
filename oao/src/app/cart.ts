import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Cart {
  selectedFish = signal<string[]>([]);

  addFish(name: string) {
    this.selectedFish.update(fish => [...fish, name]);
  }
}