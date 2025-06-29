# 🎌 Random Anime Generator

This is a simple Node.js web application that uses the [Jikan API](https://jikan.moe) to fetch and display information about a random anime.

## 📁 Project Structure

```
├── index.js         # Main server file using Express and Axios
├── index.ejs        # View template using EJS
├── main.css         # Styling for the frontend
├── public/          # Static assets (e.g. images)
├── package.json     # Node.js dependencies and scripts
└── README.md        # Project instructions and documentation
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/random-anime-generator.git
cd random-anime-generator
```

### 2. Install Dependencies

```bash
npm install
```

> This installs `express`, `axios`, `body-parser`, `ejs`, and any other required packages.

### 3. Run the Server

If you're using `nodemon` (for automatic restarts):

```bash
nodemon index.js
```

Otherwise, just use:

```bash
node index.js
```

The server will start at [http://localhost:3000](http://localhost:3000)

---

## 🌐 Features

- Fetches random anime data from the Jikan API
- Displays title, episode count, type, rating, and synopsis
- EJS templating for dynamic HTML rendering
- Styled with simple responsive CSS

---

## 🧰 Dependencies

- [Express](https://www.npmjs.com/package/express)
- [Axios](https://www.npmjs.com/package/axios)
- [Body-Parser](https://www.npmjs.com/package/body-parser)
- [EJS](https://www.npmjs.com/package/ejs)
- [Nodemon](https://www.npmjs.com/package/nodemon) (for development)

---

## 📷 Screenshot

> Add a screenshot here once your app is running!

---

## 👤 Author

**Gurnoor Singh**  
🎓 B.Tech CSE Student at Amritsar Group of Colleges

---

## 📄 License

This project is open-source and free to use.
