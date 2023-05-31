const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')

function tarefasCSS(cb){
    return gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap-grid.css', 
        './vendor/OwlCarousel2/dist/assets/owl.carousel.css', 
        './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css', 
        './vendor/jquery-ui/jquery-ui-1.13.2.custom/jquery-ui.css',
        './src/style/customize.css'
    ])
        .pipe(concat('styles.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min'})) // libs.min.css
        .pipe(gulp.dest('./dist/css'))
}

function tarefasJS(){
    return gulp.src([
        './node_modules/jquery/dist/jquery.js', 
        './node_modules/bootstrap/dist/js/bootstrap.js', 
        './node_modules/@fortawesome/fontawesome-free/js/fontawesome.js', 
        './vendor/OwlCarousel2/dist/owl.carousel.js', 
        './vendor/jquery-mask/jQuery-Mask-Plugin-master/dist/jquery.mask.js', 
        './vendor/jquery-ui/jquery-ui-1.13.2.custom/jquery-ui.js', 
        './src/js/custom.js'
    ])
        
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min'})) // libs.min.js
        .pipe(gulp.dest('./dist/js'))
}

function tarefasImagem(){

    return gulp.src('./src/images/*')
    .pipe(imagemin({
        pngquant: true,
        optipng: false,
        zopflipng: true,
        jpegRecompress: false,
        mozjpeg: true,
        gifsicle: true,
        svgo: true,
        concurrent: 10,
        quiet: true
    }))
    .pipe(gulp.dest('./dist/images'))
}

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem
