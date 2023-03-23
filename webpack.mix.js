const mix = require('laravel-mix');

mix.options({
    // Don't perform any css url rewriting by default
    processCssUrls: false,
})

mix.sass( 'src/app.scss', 'dist' );
mix.js( 'src/app.js', 'dist' );