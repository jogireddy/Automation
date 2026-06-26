# Chapter 22 — Encapsulation

This folder contains examples demonstrating encapsulation in JavaScript using private class fields (the `#` syntax), getters, and setters.

Contents
- `Encap.js` — simple `Bankaccount` class showing a private `#balance` with `deposit()` and `getBalance()`.
- `Realexp.js` — `Person` class with private `#child1` and `#child2`, plus `getChild()` and `setChild()` examples.
- `Encap_bank.js` — additional bank/account examples (if present).

Usage
- Run examples with Node.js:

```bash
node Chapter22_Encapsulation/Encap.js
node Chapter22_Encapsulation/Realexp.js
```

Notes
- Private fields (like `#child1` and `#balance`) are only accessible inside the class body.
- Use setter methods to update private fields and getter methods to read them.

If you want, I can also commit and push this change — tell me if you want me to proceed.
