const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function buildSass() {

    return src('clientLibs/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watchSass() {

    watch(['clientLibs/**/*.scss', '*.html'], buildSass)

}

exports.default = series(buildSass, watchSass)