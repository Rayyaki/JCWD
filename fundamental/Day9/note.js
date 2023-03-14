class Stack {
  #maxsize;
  #container = [];
  constructor(maxsize = 10) {
    this.#maxsize = maxsize;
  }

  push(e) {
    if (this.#container.length < this.#maxsize) this.#container.push(e);
  }

  pop() {
    this.#container.pop();
  }

  show() {
    console.log(this.#container);
  }
}

const e1 = new Stack(3);
e1.push(1);
e1.push(2);
e1.push(3);
e1.push(4);

e1.pop();

e1.push(5);

e1.show();

//=====================================================

class Queue {
  #container = [];

  push(e) {
    this.#container.push(e);
  }

  pop() {
    this.#container.shift();
  }

  show() {
    console.log(this.#container);
  }
}

const e2 = new Queue();
