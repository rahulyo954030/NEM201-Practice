const mongoose = require("mongoose")

module.exports = mongoose.connect("mongodb://localhost:27017/instagram")

//export mongodb database from here and import in index.js