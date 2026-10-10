In Angular, EventEmitter is used to send data from a child component to its parent component. It is commonly used with @Output().

@Output() — tells Angular that this event can be listened to by the parent.

new EventEmitter<string>() — creates an event emitter that emits string values.

this.buyFish.emit('Surmai') — sends the string 'Surmai' to the parent.