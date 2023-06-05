const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0/CRUD", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connection successful");
}).catch((e) => {
  console.log("Connection failed:", e);
});
