const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
	entry: "./src/index.tsx",
	output: {
		path: path.join(__dirname, "dist/"),
		publicPath: "/",
		filename: "bundle.js",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: {
					loader: "awesome-typescript-loader",
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.svg$/,
				use: "file-loader",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
		new webpack.DefinePlugin({
			"process.env": JSON.stringify(process.env),
		}),
	],
};
