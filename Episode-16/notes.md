# Episode 16 – Interview Notes

## 1. What is a JavaScript Engine?

**Answer:**

A JavaScript Engine is a program that executes JavaScript code. It converts JavaScript into machine code that the CPU can understand.

Examples:

* V8 → Google Chrome, Node.js
* SpiderMonkey → Firefox
* JavaScriptCore → Safari

---

## 2. What is V8?

**Answer:**

V8 is Google's open-source JavaScript engine written in C++. It powers Google Chrome and Node.js.

Features:

* Fast execution
* Just-In-Time (JIT) Compilation
* Automatic Garbage Collection
* Uses Ignition and TurboFan

---

## 3. How does JavaScript code execute?

**Answer:**

```text
JavaScript Code
        ↓
Parser
        ↓
AST
        ↓
Ignition (Interpreter)
        ↓
Profiler (collects execution feedback)
        ↓
TurboFan (Optimizing Compiler)
        ↓
Machine Code
        ↓
CPU executes the code
```

---

## 4. What is an AST?

**Answer:**

AST (Abstract Syntax Tree) is a tree representation of JavaScript code created by the parser.

Purpose:

* Understand code structure
* Detect syntax errors
* Help the engine optimize code

---

## 5. Difference between Interpreter and Compiler

| Interpreter                | Compiler                             |
| -------------------------- | ------------------------------------ |
| Executes code line by line | Compiles code before execution       |
| Faster startup             | Better performance after compilation |
| Used by Ignition           | Used by TurboFan                     |

---

## 6. What is JIT Compilation?

**Answer:**

JIT (Just-In-Time) Compilation combines interpretation and compilation.

Process:

* Code starts in Ignition.
* Frequently executed ("hot") code is optimized by TurboFan.
* Optimized machine code runs faster.

---

## 7. What are Ignition and TurboFan?

**Ignition**

* Interpreter
* Converts JavaScript into bytecode
* Executes code immediately

**TurboFan**

* Optimizing compiler
* Uses execution feedback
* Produces optimized machine code

---

## 8. What is Garbage Collection?

**Answer:**

Garbage Collection is the automatic process of freeing memory that is no longer being used.

Advantages:

* Prevents memory leaks
* Improves performance
* Automatically managed by the JavaScript engine

---

## 9. What is the Mark-and-Sweep Algorithm?

**Answer:**

Steps:

1. Mark all objects reachable from the root.
2. Identify unreachable objects.
3. Sweep (delete) unreachable objects and free memory.

---

## 10. Why is V8 so fast?

**Answer:**

Because V8:

* Uses JIT Compilation
* Optimizes frequently used code
* Uses TurboFan
* Performs automatic Garbage Collection
* Generates optimized machine code

---

# One-Line Interview Revision

✓ JavaScript Engine executes JavaScript.

✓ V8 is Google's JavaScript engine.

✓ Parser creates the AST.

✓ Ignition interprets bytecode.

✓ TurboFan optimizes hot code.

✓ JIT = Interpreter + Optimizing Compiler.

✓ Garbage Collection frees unused memory.

✓ Mark-and-Sweep removes unreachable objects.

✓ Optimized machine code runs on the CPU.
