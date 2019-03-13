const path = require("path");
const webpack = require("webpack");

const config = {
    entry: {
        main: "./src/index.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node-modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        presets: ["@babel/preset-react"],
                    }
                },
            }
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
        })
    ]
};

module.exports = (env/*, args*/) => {
    if (env && env.production) {
        config.mode = "production";
        config.devtool = 'source-map';
    } else {
        config.mode = "development";
        config.devtool = "cheap-module-eval-source-map";
    }

    return config;
}