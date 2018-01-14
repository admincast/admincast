var gulp = require('gulp');
    requireDir    = require('require-dir'),
    browserSync   = require('browser-sync'),
    pug  = require('gulp-pug'),
    htmlbeautify = require('gulp-html-beautify'),
    data = require('gulp-data'),
    fs   = require('fs'),
    uglify    = require('gulp-uglify'),
    concat    = require('gulp-concat'),
    jshint    = require('gulp-jshint'),
    sass         = require('gulp-sass'),
    cleanCSS     = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    rename       = require('gulp-rename'),
    gulpif    = require('gulp-if'),
    bourbon      = require('node-bourbon'),
    imagemin  = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    //tasks         = requireDir('./gulp-tasks'),
    readConfig = require('read-config'),
    config    = readConfig('./config.json');



/*
* BUILD ALL FILES FOR THEME
*/


gulp.task('build', [
    'build:pug',     // BUILD ALL HTML FILES FOR THEME
    'build:sass',    // BUILD ALL CSS FILES FOR THEME
    'build:js',      // BUILD JS FILES FOR THEME
    'build:img',     // COMPRESS IMAGES AND SAVE TO THEME ASSETS FOLDER
    'build:vendors', // SAVE VENDOR PLUGINS TO THEME ASSETS FOLDER
    'build:data'     // SAVE DEMO DATA TO THEME ASSETS FOLDER
]);


var options = {
    indentSize: 2,
    unformatted: [
        // https://www.w3.org/TR/html5/dom.html#phrasing-content
         'abbr', 'area', 'b', 'bdi', 'bdo', 'br', 'cite',
        'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'ins', 'kbd', 'keygen', 'map', 'mark', 'math', 'meter', 'noscript',
        'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', 'small',
         'strong', 'sub', 'sup', 'template', 'time', 'u', 'var', 'wbr', 'text',
        'acronym', 'address', 'big', 'dt', 'ins', 'strike', 'tt'
    ]
};

//== BUILD HTML FILES FOR THEME

gulp.task('build:pug', function() {
    return gulp.src(config.build.pug.src)
        .pipe(data(function(file){
            return JSON.parse(fs.readFileSync(config.path.src+'/pug/menu.json'))
        }))
        .pipe(pug())
        .pipe(htmlbeautify(options))
        .pipe(gulp.dest(config.build.pug.output));
});


//== BUILD JS FILES FOR THEME

gulp.task('build:js', function() {
   gulp.src(config.build.js.src)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(concat('app.js'))
    .pipe(gulp.dest(config.build.js.output))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(config.build.js.output));

   //== Page level scripts
   gulp.src(config.path.src+'/js/scripts/**/*.js')
    .pipe(gulp.dest(config.build.js.output+'/scripts'));
});

//== BUILD ALL CSS FILES FOR THEME

gulp.task('build:sass', function(){

    //== MAIN CSS FILE FOR THEME: included
  gulp.src(config.build.sass.src.bundle)
    .pipe(sass({
        includePaths: bourbon.includePaths
    }))
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.sass.output.bundle))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(config.build.sass.output.bundle));

    //== THEME SKIN FILES
  gulp.src(config.build.sass.src.themes)
    .pipe(sass({
        includePaths: bourbon.includePaths
    }))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.sass.output.themes));

    //== PAGES STYLES
  gulp.src(config.build.sass.src.pages)
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.sass.output.pages));
});

//== COMPRESS IMAGES

gulp.task('build:img', function(){
    gulp.src(config.path.src+'/img/**/*.*')
        .pipe(imagemin({ // compress images
            progressive: true, // compress .jpg
            interlaced: true, // compress .gif
            svgoPlugins: [{removeViewBox: false}], // compress .svg
            use: [pngquant()],
            optimizationLevel: 3 // compression level 0-7
        }))
        .pipe(gulp.dest(config.path.output+'/assets/img'));
});

//== SAVE VENDOR PLUGINS TO THEME ASSETS FOLDER

gulp.task('build:vendors', function(){
    gulp.src(config.path.bower_components+'/**/*.*')
      .pipe(gulp.dest(config.path.output+'/assets/vendors'));
    gulp.src(config.path.vendors+'/**/*.*')
      .pipe(gulp.dest(config.path.output+'/assets/vendors'));
});

//== SAVE DEMO DATA TO THEME ASSETS FOLDER

gulp.task('build:data', function(){
    gulp.src(config.path.src+'/demo/**/*.*')
      .pipe(gulp.dest(config.path.output+'/assets/demo'));
});











/*
*  Watchers
*/


gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "../../dist/"
        },
        host: 'localhost',
        port: 3000,
    });
    gulp.watch(config.path.src+'/js/**/*.js', ['watch:js']);
    gulp.watch(config.path.src+'/sass/**/*.+(scss|sass)', ['watch:sass']);
    gulp.watch(config.path.src+'/pug/**/*.pug', ['watch:pug']);
});

gulp.task('watch:js', ['build:js'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('watch:sass', ['build:sass'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('watch:pug', ['build:pug'], function (done) {
    browserSync.reload();
    done();
});
