const path = require("path");
module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts/"),
        filename: "App.js"
    },
    module: {
        rules: [ // use to be loaders but is now "rules:"
                {
                    loader: "babel-loader", // need to have -loader after babel
                    query: {
                        presets: ["es2015"]
                    },
                    test: /\.js$/,
                    exclude: /node_modules/
            }
        ]
    }
}
