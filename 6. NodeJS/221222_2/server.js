const express = require("express")
const nunjucks = require("nunjucks")
const app = express()
const router = require("./routes")
const cookieParser = require("./middlewrares/cookieParser")

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})

app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser)
app.use(router)

app.use((error, req, res, next) => {
    console.error(error.message)
    res.send(`
        <script type='text/javascript'>
            alert("${error.message}");
            history.back();
        </script>
    `)
})

app.listen(3000, () => {
    console.log(`server start`)
})
