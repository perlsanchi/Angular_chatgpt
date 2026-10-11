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

/* Gnerics can be used within classes */
export class Box<T> {
  constructor(public value: T) {}

  getValue(): T {
    return this.value;
  }
}
let fishBox = new Box<string>('Surmai');

let priceBox = new Box<number>(400);

/* Can be used as an interface */
interface ApiResponse<T> {
  data: T;
  success: boolean;
  message: string;
}