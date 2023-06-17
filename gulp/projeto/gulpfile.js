const {series} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const htmlmin = require('gulp-htmlmin')
const stripJs = require('gulp-strip-comments')
const stripCss = require('gulp-strip-css-comments')
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')(require('node-sass'))
const reload = browserSync.reload

function tarefasCSS(callback){
    gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css', 
        './vendor/OwlCarousel2/dist/assets/owl.carousel.css', 
        './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css', 
        './vendor/jquery-ui/jquery-ui-1.13.2.custom/jquery-ui.css'
    ])
        .pipe(stripCss())                // remove comentários
        .pipe(concat('libs.css'))        // mescla arquivos
        .pipe(cssmin())                  // minifica css
        .pipe(rename({ suffix: '.min'})) // libs.min.css
        .pipe(gulp.dest('./dist/css'))   // cria arquivo em novo diretorio

    return callback()
}

function tarefasSASS(callback){

    gulp.src('./src/scss/**/*.scss')
        .pipe(sass())  // transforma o sass para css
        .pipe(gulp.dest('./dist/css'))

    return callback()
}

function tarefasJS(callback){
    gulp.src([
        './node_modules/jquery/dist/jquery.js', 
        './node_modules/bootstrap/dist/js/bootstrap.js', 
        './node_modules/@fortawesome/fontawesome-free/js/fontawesome.js', 
        './vendor/OwlCarousel2/dist/owl.carousel.js', 
        './vendor/jquery-mask/jQuery-Mask-Plugin-master/dist/jquery.mask.js', 
        //'./vendor/jquery-ui/jquery-ui-1.13.2.custom/jquery-ui.js', 
        './src/js/custom.js'
    ])
        .pipe(babel({
            comments: false,
            presets: ['@babel/env']         // remove comentários
        }))                                  
        .pipe(concat('scripts.js'))         // mescla arquivos
        .pipe(uglify())                     // minifica Js
        .pipe(rename({ suffix: '.min'}))    // libs.min.Js
        .pipe(gulp.dest('./dist/js'))       // cria arquivo em novo diretorio

    return callback()
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

function tarefasHTML(callback){
    gulp.src('./src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))

    return callback()
}

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
    gulp.watch('./src/**/*').on('change', process) // repete o processo quando alterar algo em src
    gulp.watch('./src/**/*').on('change', reload)
   
})

const process = series( tarefasHTML, tarefasJS, tarefasCSS, tarefasSASS )

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem
exports.sass = tarefasSASS

exports.default = process
