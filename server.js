const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const path = require("path");

const app = express();

// ✅ Enable CORS for all origins
app.use(cors({ origin: "*" }));
app.use(express.json());

// ✅ Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

const API_KEY = "hHPO60lyyGj8JN7zxt2Uug==5YVPY7ngx0XDqQ4m"; // Your API Ninjas Key

// ✅ API route for fetching recipes
app.get("/api/recipe", async (req, res) => {
    const query = req.query.query;
    if (!query) return res.status(400).json({ error: "Missing query parameter" });

    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/recipe?query=${query}`, {
            headers: { "X-Api-Key": API_KEY },
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error fetching recipe:", error);
        res.status(500).json({ error: "Failed to fetch recipe" });
    }
});

// ✅ Serve index.html for all unknown routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ Start server locally (for testing)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// ✅ Export for Koyeb deployment
module.exports = app;
