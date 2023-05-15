const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", ContactSchema);
app.get("/", (req, res) => {
  res.send("hello");
});
app.post("/portfolio", (req, res) => {
  const contact = new Contact(req.body);
  contact.save();
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
