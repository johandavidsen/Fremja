const { mix } = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .setPublicPath('public')
    .react('src/app','public/js')
    .browserSync({
        server: 'public',
        files: 'public/**',
        port: 3000,
        logLevel: 'silent',
        proxy: false,
        ghostMode: false,
        notify: false,
        open: false
    })
