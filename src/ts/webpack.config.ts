import path from "path";

module.exports = {
    entry: './makeschemasdoc.js',
    resolve: {
        extensions: ['.js', '.json']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../../dist')
    }
}
