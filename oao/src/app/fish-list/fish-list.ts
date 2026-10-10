import { Component,input,output } from '@angular/core';

@Component({
  selector: 'app-fish-list',
  imports: [],
  templateUrl: './fish-list.html',
  styleUrl: './fish-list.css'
})
export class FishList {
  fishName = input('Pomfret');
  price = input(500);

  buyFish = output<string>();

  buyNow() {
    this.buyFish.emit(this.fishName());
  }
}