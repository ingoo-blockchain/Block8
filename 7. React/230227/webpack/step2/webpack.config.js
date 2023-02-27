const path = require("path")

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist"),
    },
}
