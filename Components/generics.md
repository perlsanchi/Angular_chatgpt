1. What are generics?

Generics allow you to write reusable code that works with different data types while keeping type safety.

Think of a generic as a reusable container. You decide what type goes inside when you use it.

without generics
getFirstFishName(items: string[]): string {
  return items[0];
}

getFirstPrice(items: number[]): number {
  return items[0];
}

getFirstItem<T>(items: T[]): T | undefined {
  return items[0];
}

<T> declares a type parameter.

items: T[] means an array of values of type T.

T | undefined means the function returns a value of type T, or undefined if the array is empty.

return items[0] returns the first item.

T is just a conventional name. You could use another name, such as Item.

