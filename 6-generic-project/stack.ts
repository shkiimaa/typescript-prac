{
  {
    interface IStack<T> {
      readonly size: number;
      push(value: T): void;
      pop(): T;
    }

    type StackNode<T> = {
      readonly value: T;
      readonly next?: StackNode<T>;
    };

    class Stack<T> implements IStack<T> {
      private _size: number = 0;
      private head?: StackNode<T>;

      constructor(private capacity: number) {}

      get size() {
        return this._size;
      }

      push(value: T): void {
        if (this.size === this.capacity) {
          throw new Error('Stack is full');
        }
        const node: StackNode<T> = { value, next: this.head };
        this.head = node;
        this._size++;
      }

      pop(): T {
        if (!this.head) {
          throw new Error('Stack is empty');
        }
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.value;
      }
    }

    const stack = new Stack<string>(10);
    stack.push('sss');
    stack.push('ddd');
    stack.push('fff');
    stack.push('ggg');

    while (stack.size !== 0) {
      console.log(stack.pop());
    }

    const stack2 = new Stack<number>(10);
    stack2.push(1);
    stack2.push(2);
    stack2.push(3);
    stack2.push(4);

    while (stack.size !== 0) {
      console.log(stack.pop());
    }
  }
}
