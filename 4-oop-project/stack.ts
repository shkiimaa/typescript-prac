{
  interface IStack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  };

  class Stack implements IStack {
    private _size: number = 0;
    private head?: StackNode;

    constructor(private capacity: number) {}

    get size() {
      return this._size;
    }

    push(value: string): void {
      if (this.size === this.capacity) {
        throw new Error('Stack is full');
      }
      const node: StackNode = { value, next: this.head };
      this.head = node;
      this._size++;
    }

    pop(): string {
      if (!this.head) {
        throw new Error('Stack is empty');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new Stack(10);
  stack.push('sss');
  stack.push('ddd');
  stack.push('fff');
  stack.push('ggg');

  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  stack.pop();
}
