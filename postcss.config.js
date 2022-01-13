const config = {
    plugins: [
        require('postcss-import'),
        require('autoprefixer')({
            overrideBrowserslist: ['defaults and last 4 versions'],
        }),
    ],
};

module.exports = config;