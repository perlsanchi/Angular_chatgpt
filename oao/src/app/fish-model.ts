export interface Fish {
  id: number;
  name: string;
  price: number;
  status: string;
  description?: string;

  
}


export class FishProduct {
  constructor(
    public name: string,
    public price: number
  ) {}

  getDetails(): string {
    return `${this.name} costs ₹${this.price}`;
  }
}