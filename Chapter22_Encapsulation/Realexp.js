class Person {
  #child1;
  #child2;

  constructor(name, ch1, ch2) {
    this.#child1 = ch1;
    this.#child2 = ch2;
    this.name = name;
  }

  getChild() {
    return `${this.#child1} ${this.#child2}`;
  }

  setChild(changed_name1, changed_name2) {
    this.#child1 = changed_name1;
    this.#child2 = changed_name2;
    return this.getChild();
  }
}

let p = new Person("pramod", "vijay", "Jogi");
p.setChild("Reddy", "Chintapalli");
console.log(`${p.name} ${p.getChild()}`);