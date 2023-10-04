const mongoose = require("mongoose");
URL = "mongodb+srv://ash:FEnzqZAyH3K4UhaF@rakes-db.dndam79.mongodb.net/";
module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(URL, connectionParams);
    console.log("Connected to database successfully..");
  } catch (error) {
    console.log(error);
    console.log("Could not connect database!");
  }
};
