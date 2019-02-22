const path = require('path');

const config = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        presets: ['@babel/preset-react'],
                    }
                },
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'cheap-module-eval-source-map';
    }

    if (argv.mode === 'production') {
        config.devtool = 'source-map';
    }

    return config;
}