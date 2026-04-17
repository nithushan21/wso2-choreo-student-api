const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const studentRoutes = require("./routes/students");

app.use("/students", studentRoutes);

// ROOT ROUTE (IMPORTANT)
app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 3000;

// IMPORTANT BIND
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
