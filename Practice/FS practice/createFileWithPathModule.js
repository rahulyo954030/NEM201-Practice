const fs = require("fs")

const path = require("path")

const dirPath = path.join(__dirname,"Files")

fs.writeFileSync(dirPath+"/hello.txt", "file created")