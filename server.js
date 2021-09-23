const express = require("express")

const PORT = process.env.PORT || 2222;

const app = express()

// localhost & 127.0.0.1 are same

const publicHtmlFolder = __dirname + "/public_html"
console.log("PublicHTML Folder:", publicHtmlFolder)

app.use("/", express.static(publicHtmlFolder))

app.use("/kajal", (req, res) => {
    res.send("Hello World - Kajal")
})

app.use("/usha", (req, res) => {
    res.send("Some Data Sent by Usha")
})

app.listen(PORT, () => {
    console.log("Server is running on port:", PORT)
})