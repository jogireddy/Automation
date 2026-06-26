# Chapter 22 — Encapsulation

This folder contains JavaScript examples for learning encapsulation using private class fields, getters, and setters.

## Files in this chapter
- `Encap.js` — demonstrates a simple bank account example with a private `#balance` field.
- `Realexp.js` — shows how private fields like `#child1` and `#child2` are used inside a class.
- `Encap_bank.js` — contains a bank-style example for practicing encapsulation.
- `Encap_car.js` — adds another example for understanding private properties and class methods.

## How to run
Run the examples with Node.js from the project root:

```bash
node Chapter22_Encapsulation/Encap.js
node Chapter22_Encapsulation/Realexp.js
node Chapter22_Encapsulation/Encap_bank.js
node Chapter22_Encapsulation/Encap_car.js
```

## Key concepts
- Private fields are declared with `#` and can only be accessed inside the class.
- Getters allow reading values safely.
- Setters allow updating private values through controlled methods.

## Example idea
A class can keep important data private and expose only the methods needed to interact with it.
