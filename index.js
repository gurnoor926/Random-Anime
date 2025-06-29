import express from "express"; // Importing Express framework
import axios from "axios";     // Axios to make HTTP requests
import bodyParser from "body-parser"; // Middleware to parse POST request bodies

const app = express(); // Create an Express application
const port = 3000;     // Server port
const Api_url = "https://api.jikan.moe/v4/random/anime"; // Jikan API endpoint for random anime

// Serve static files from the "public" folder
app.use(express.static("./public"));

// Middleware to parse URL-encoded POST request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Route for rendering the main page
app.get("/", (req, res) => {
    res.render("index.ejs"); // Render EJS view without anime data initially
});

// Route for handling anime generation form submission
app.post("/search", async (req, res) => {
    try {
        const response = await axios.get(Api_url); // Fetch random anime from API
        const data = response.data.data;

        // Extract relevant anime information
        const image = data.images.jpg.image_url;
        const description = data.synopsis;

        console.log(data.title_english, description, data.episodes, data.type);

        // Render page with anime data
        res.render("index.ejs", {
            anime: data,
            img: image,
            desc: description
        });
    } catch (error) {
        console.log(error);
        res.status(404).send("not found"); // Handle API error
    }
});

// Start the server
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
