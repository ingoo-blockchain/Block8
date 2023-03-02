const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const webpack = require("webpack")

module.exports = {
    name: "react-project2",
    mode: "development",
    resolve: {
        extensions: [".js", ".jsx"],
    },
    entry: "./src/index.jsx",
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "index.html",
        }),
        new MiniCssExtractPlugin({ filename: "index.css" }),
        new webpack.ProvidePlugin({
            process: "process/browser",
        }),
    ],
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
