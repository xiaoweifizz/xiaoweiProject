// 在nodejs环境下运行的js文件
// 按照nodejs的语法使用

// 引用模块: require();  得到一个对象/函数
// gulp,gulp-sass

var gulp = require('gulp');//{task(),}
var sass = require('gulp-sass');//fn


// sass->css
gulp.task('compileSass',function(){
	// 先查找sass文件所在目录
	gulp.src('./src/sass/*.scss') // 返回文件流（液体，文件在内存中的状态）

	// scss->css
	.pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))

	// 输出到硬盘
	.pipe(gulp.dest('./src/css/'))
});


// 监听文件修改，自动执行编译任务
gulp.task('jtSass',function(){
	gulp.watch('./src/sass/*.scss',['compileSass'])
})

gulp.task('default',function(){
	// console.log(gulp)
	gulp.src('./src/lib/bootstrap-sass-3.3.7/assets/stylesheets/*.scss')
	.pipe(sass({outputStyle:'compact'}).on('error', sass.logError))
	.pipe(gulp.dest('./src/css/'))
});


// js压缩
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('compressJs',function(cb){
	// gulp.src('./src/js/**/*.js')

	// .pipe(uglify())

	// // 输出到构建目录
	// .pipe(gulp.dest('./dist/js/'))

	pump([
		gulp.src('./src/js/*.js'),

		// 合并
		concat('index.js'),
		gulp.dest('./dist/js/'),

		// 压缩
		uglify(),

		// 重命名
		rename({
			suffix:'.min'
		}),

		gulp.dest('dist/js/')
	],cb );
});

// 自动刷新服务器
var browserSync = require('browser-sync');

// 静态服务器
gulp.task('server',()=>{
	browserSync({
		// 服务器路径
		// server:'./src/',

		// 代理服务器
		proxy:'http://localhost:1802',

		// 端口
		port:666,

		// 监听文件修改，自动刷新
		files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']
	});

	// 监听sass文件修改，并自动编译
	gulp.watch('./src/sass/*.scss',['compileSass'])
})

// 布置文件 压缩img文件

var cssmin = require('gulp-cssmin');

gulp.task('cssmin',function(){
	return gulp.src('css/index.css')
			   .pipe(cssmin())
			   .pipe(gulp.dest('dist'));
})