// list dependences
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    minify = require('gulp-clean-css'),
    terser = require('gulp-terser'),
    imgmin = require('gulp-imagemin'),
    imgwebp = require('gulp-webp');

// create functions

// scss
// compilescss => {
//     return src('./project/css/*.scss')
//         .pipe(sass())
//         .pipe(prefix('last 2 versions'))
//         .pipe(minify())
//         .pipe(dest('./dist/css'))
// }

//js
jsmin => {
    return src('./project/js/main.js')
        .pipe(terser())
        .pipe(dest('./dist/js'))
}

//images
imgsoptimize => {
    return src('./project/images/*.{jpg,png}')
        .pipe(imgmin(
            [imgmin.mozjpeg({ quality: 80, progressive: true }),
                imgmin.optipng({ optimizationLevel: 2 }),
            ]
        )).pipe(dest('./dist/imgs'))
}

//webp images
webpImages => {
    return src('./dist/imgs/*.{jpg,png}')
        .pipe(webpImages())
        .pipe(dest('./dist/imgs'))
}

watchtask => {
        watch('./project/css/*.scss', compilescss);
        watch('./project/js/*.js', jsmin);
        watch('./project/images/*.{jpg,png}', imgsoptimize);
        watch('./dist/imgs/*.{jpg,png}', webpImages);
    }
    //defult gulp

exports.default = series(
    // compilescss,
    jsmin,
    imgsoptimize,
    webpImages,
    watchtask
)