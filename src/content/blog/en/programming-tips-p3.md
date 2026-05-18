---
title: "Tips for New Programmers – Part 3: Learn to Search for Solutions"
pubDate: 2025-12-26
tags: ["programming", "learning", "development", "debugging"]
languages: []
description: "Nobody programs from memory. I teach you advanced techniques to use Google, Stack Overflow, and read technical documentation without getting lost in the attempt."
image:
  url: "/images/posts/blog/search-solutions-banner.webp"
  alt: "Tips for New Programmers – Part 3: Learn to Search for Solutions"

author: Medalcode
---

An uncomfortable truth: **70% of my time as a Senior programmer is spent reading, not writing.**

I read other people's code, I read documentation, and above all, I read answers on the Internet.

One of the biggest myths when you start is believing that a "good programmer" is one who writes code at the speed of light without looking at any reference, like in 90s hacker movies.

The reality is very different. A programmer's most important superpower is not their memory, it's their **research ability**.

In this third part of the series, we're going to see how to google like a professional.

---

## 🔍 1. The Art of "Googling"

Searching on Google seems obvious, but there's a huge difference between a vague search and a sniper search.

### ❌ Beginner Search

> "my code doesn't work help"
> "javascript error"

### ✅ Professional Search

> "TypeError: Cannot read properties of undefined (reading 'map') React useEffect"
> "center div css grid vs flexbox performance"

### Tricks for effective searches:

1.  **Include technological context:** Always mention the language, framework, or library. A "null pointer" error is not solved the same way in Java as in C++.
2.  **Copy the error, but clean the specific parts:**
    - Good: `Error: fail to connect to server at port 8080`
    - Bad: `Error: fail to connect to server at port 8080 user JONATTHAN_MEDALLA` (remove paths from your PC or usernames).
3.  **Use operators:**
    - `"exact error"` (in quotes) searches for that literal phrase.
    - `site:stackoverflow.com` searches only on that site.
    - `after:2025` searches for recent results (very useful for frameworks that change quickly like Next.js).

---

## 📚 2. Stack Overflow: Survival Manual

Eventually you'll arrive at [Stack Overflow](https://stackoverflow.com/). It's the Library of Alexandria of code. But be careful, it can be a hostile place if you don't know how to navigate it.

### How to read an answer

Don't go straight to the code to copy and paste (although we all do it).

1.  **Look at the date:** An answer from 2013 about JavaScript probably uses `var` and obsolete techniques. Look for answers post-2020 (ES6+).
2.  **Look at the votes:** The accepted answer (✅) is the one that helped the original author, but sometimes the second answer has more votes and is a better or more modern solution.
3.  **Read the comments:** Sometimes the real gem is in a small comment that says: _"This stopped working in version 18, use this instead..."_.

---

## 📖 3. Lose the Fear of Documentation

Many juniors avoid official documentation ("The Docs") because it's usually technical, dry, and boring. They prefer a 20-minute YouTube tutorial.

The problem is that the video becomes obsolete; **documentation is the source of truth**.

### Strategy for reading docs:

Don't try to read it like a novel, from beginning to end. Use it like a dictionary.

1.  Go to the **"Getting Started"** or **"Quick Start"** section to install and see a "Hello World".
2.  Search in the sidebar for the specific API you need (e.g., `Array.prototype.map`).
3.  Copy the official code example and modify it little by little.

---

## 🤖 4. AI as Assistant (The New Era)

Nowadays, tools like ChatGPT or Claude are incredible for explaining errors.

**Golden tip:** Instead of telling it "write the code for me", tell it **"explain why this fails"**.
If you only copy what the AI gives you, you don't learn. If you ask it to explain the error, you gain knowledge for next time.

---

## 🎯 Conclusion

Don't feel bad about having 20 browser tabs open searching how to make a `for` loop. It's part of the job.

Your value as a developer is not in what you memorize, but in how quickly you can understand a new problem and find who already solved it before.

Happy coding! 🚀

---

**Tips for New Programmers Series:**

- [Part 1: Stay Focused!](/blog/programming-tips-p1)
- [Part 2: Consistency](/blog/programming-tips-p2)
- **Part 3: Learn to Search for Solutions (You are here)**
