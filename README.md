connect-ssi
===========

SSI (Server Side Includes) Middleware for connect

##install:
<pre>
npm install connect-ssi
</pre>

##Examples:
<pre>
// using gulp-connect:
gulp.task('connect', connect.server({
    root: ['app'],
    middleware: function() {
        return [connectSSI({
            baseDir: __dirname + '/app'
        })];
    }
}));
</pre>

more soon...
