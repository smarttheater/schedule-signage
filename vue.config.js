const webpack = require('./node_modules/webpack');

module.exports = {
    filenameHashing: false,
    devServer: {
        host: '0.0.0.0',
        port: 6789,
        before: (app) => {
            app.get('/env', (req, res) => {
                res.json({
                    authConfig: {
                        identityPoolId: process.env.COGNITO_IDENTITY_POOL_ID,
                        region: process.env.COGNITO_REGION,
                        userPoolId: process.env.COGNITO_USER_POOL_ID,
                        userPoolWebClientId: process.env.COGNITO_USER_POOL_CLIENT_ID,
                    },
                    cognitoUser: {
                        userId: process.env.COGNITO_USER_ID,
                        password: process.env.COGNITO_USER_PASSWORD,
                    },
                    CINERINO_API_ENDPOINT: process.env.CINERINO_API_ENDPOINT,
                });
            });
        },
    },
    pluginOptions: {
        webpackBundleAnalyzer: {
            openAnalyzer: false,
        },
    },
    productionSourceMap: false,
    chainWebpack: (config) => {
        config.plugin('ignore').use(webpack.IgnorePlugin, [/^\.\/locale$/, /moment$/]);
    },
};
