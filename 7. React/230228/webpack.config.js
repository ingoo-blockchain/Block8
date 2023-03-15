const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    name: "react-project",
    mode: "development", // development , production
    resolve: {
        extensions: [".js", ".jsx"],
    },
    entry: "./src/index.jsx",
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html", // 원본
            filename: "index.html", // 번들링 될 파일이름
        }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: [],
                },
            },
        ],
    },
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist"),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 3000,
        hot: true,
        historyApiFallback: true,
    },
}
