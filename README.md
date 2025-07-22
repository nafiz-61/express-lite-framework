# miniExpressJS

A lightweight Node.js web framework that mimics core features of Express.js including routing, middleware, and HTTP server creation using native modules only.

---

## 🚀 Features

- Custom `use()` method for middleware
- Basic routing with `.get()` and `.post()`
- Custom HTTP server using `http` module
- Simple middleware execution chain using Promises
- Custom method `ourlisten()` for launching server

---

## 📦 Technologies Used

- Node.js (native modules)
  - `http`
  - `events`
  - `console`

---

## 🛠️ Installation

```bash
git clone https://github.com/your-username/miniExpressJS.git
cd miniExpressJS
node server.js
