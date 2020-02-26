import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';


const Config: Configuration = {
    entry: path.join(__dirname, './main.tsx'),
    module: {
        rules: [
            {
                test: /\.ts(x*)$/i,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './public/index.html')
        })
    ]
};

export default Config;