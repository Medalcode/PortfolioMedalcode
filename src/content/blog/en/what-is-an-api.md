---
title: "What is an API? Explanation for Beginners"
pubDate: 2025-12-19
tags: ["APIs", "web-development", "backend", "REST", "GraphQL", "SOAP"]
languages: []
description: "Discover what an API is, how it works, and the different types that exist. Learn to make requests to public APIs with Postman."
image:
  url: "/images/posts/apis/what-is-an-api.jpg"
  alt: "What is an API?"

author: Medalcode
---

![What is an API?](/static/images/apis/what-is-an-api.jpg)

# 🚀 What is an API? Explanation for Beginners

APIs are everywhere. Every time you use a weather app, make an online payment, or check your social media feed, you're interacting with APIs.

But what exactly is an API and how does it work? 🤔

## 🔹 Definition and Purpose of an API

An API (**Application Programming Interface**) is a **set of rules** that allows two applications to communicate with each other.

📌 **Simple example:**
Think of an API as a **waiter in a restaurant**.

- You (the client) place an order.
- The waiter (the API) takes your order to the kitchen (the server).
- The kitchen prepares the food and the waiter delivers it to you.

You don't need to know **how the food is cooked**, you just order and receive the result. That's how APIs work!

### What are APIs for?

✅ **Connect services and data** without exposing internal logic.
✅ **Automate tasks** by allowing systems to interact with each other.
✅ **Facilitate integrations** between platforms (Google Maps in Uber, PayPal payments, etc.).

---

## 🔹 Types of APIs

Not all APIs are the same. There are different types depending on their structure and use.

### REST (Representational State Transfer)

🔹 Based on **HTTP**, uses **JSON or XML** to send data.
🔹 Follows principles like unique URLs and HTTP methods (**GET**, **POST**, etc.).
🔹 **Example:** Twitter API.

🌟 **Ideal for modern web applications.**

### SOAP (Simple Object Access Protocol)

🔹 Based on **XML**, more **structured and robust**.
🔹 Used in **secure and critical** transactions (banks, large companies).
🔹 **Example:** Banking services and electronic billing.

🌟 **More secure but more complex than REST.**

### GraphQL

🔹 Allows specific and optimized queries.
🔹 The client decides what data it needs instead of receiving all the information.
🔹 **Example:** GitHub GraphQL API.

🌟 **Ideal for applications that handle large volumes of data.**

---

## 🔹 Differences between API and Web Service

📌 **API:**
✅ Allows communication between programs.
✅ Can be local or remote.

📌 **Web Service:**
✅ Is a type of API that uses network protocols like HTTP/S.
✅ Always remote and web-based.

📢 **Conclusion:** All Web Services are APIs, but not all APIs are Web Services.

---

## 🔹 Key Concepts in APIs

To understand how APIs work, we need to know some fundamental concepts.

### Client-Server

🔹 The client (browser, app) makes a request.
🔹 The server (API) responds with the requested information.

📌 **Example:**

- A user searches for "weather in Madrid".
- The weather app makes a request to a weather API.
- The API responds with meteorological data.

### Request and Response

🔹 A **request** is when the client asks for data from the API.
🔹 A **response** is when the API returns the information.

📌 **Code example:**

```json
// Request: A client asks for user information
GET /users/1

// Response: The API responds with user data
{
  "id": 1,
  "name": "Jonatthan",
  "email": "jonatthan@email.com"
}
```

---

## 🚀 Conclusion

APIs are fundamental in modern web development. They allow different applications to communicate with each other efficiently and securely.

💬 **Do you have questions about APIs? Leave me a comment!**
